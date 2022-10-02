import classes from "./LoginForm.module.css";
import CustomInput from "../../../components/ui/custom-input/CustomInput";
import CustomCheckbox from "../../../components/ui/custom-checkbox/CustomCheckbox";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormLayout from "../../../components/ui/form-layout/FormLayout";
import { useInput } from "../hooks/useInput";
import { useHttp } from "../hooks/useHttp";
import { authActions } from "../../../store/auth";
import { cartActions } from "../../../store/cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const LoginForm = ({ currentPage, changeCurrentPage }) => {
  const currUser = useSelector((state) => {
    return state.auth.currentUser;
  });
  const readyToBuy = useSelector((state) => state.cart.readyToBuy);

  const {
    value: enteredEmail,
    valueChangeHandler: emailChangeHandler,
    // valueIsValid: emailIsValid,
    // hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    // isValidated: emailIsValidated,
  } = useInput("email");

  const {
    value: enteredPassword,
    valueChangeHandler: passwordChangeHandler,
    // valueIsValid: passwordIsValid,
    // hasError: passwordHasError,
    inputBlurHandler: passwordBlurHandler,
    // isValidated: passwordIsValidated,
  } = useInput("password");

  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const sendLoginRequest = useHttp("login", enteredEmail, enteredPassword);

  const findUser = async (email) => {
    const response = await fetch(
      "https://techshop-f37c5-default-rtdb.firebaseio.com/users.json/"
    );
    const data = await response.json();
    const users = [];
    for (const key in data) {
      const user = data[key];
      users.push(user);
    }
    // console.log(users);
    const user = users.find((user) => email === user.email);
    return user;
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    sendLoginRequest()
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error("Login Failed!");
          });
        }
      })
      .then((data) => {
        const email = data.email;
        findUser(email).then((user) =>
          dispatch(authActions.setCurrentUser(user))
        );
        dispatch(authActions.login());
        navigate(readyToBuy ? "/cart" : "/");
        dispatch(cartActions.setReadyToBuy(false));
      })
      .catch((err) => alert(err.message));
  };

  return (
    <FormLayout onSubmit={submitFormHandler}>
      <div>
        <CustomInput
          onChange={emailChangeHandler}
          type="email"
          placeholder="Email"
          value={enteredEmail}
          onBlur={emailBlurHandler}
        ></CustomInput>
      </div>

      <CustomInput
        onChange={passwordChangeHandler}
        type="password"
        placeholder="Password"
        value={enteredPassword}
        onBlur={passwordBlurHandler}
      ></CustomInput>
      <div className={classes["checkbox-container"]}>
        <CustomCheckbox label="Remember me"></CustomCheckbox>
        <p>Change your password</p>
      </div>
      <CustomInput
        type="submit"
        value="Log In"
        formIsValid={true}
      ></CustomInput>
      <div className={classes.register}>
        <p>
          <Link to="/login/register">Don't have an account?</Link>
        </p>
        <span>
          <Link to="/login/register">Register here</Link>
        </span>
      </div>
    </FormLayout>
  );
};

export default LoginForm;
