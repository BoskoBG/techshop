import React, { useRef, useState } from "react";
import CustomInput from "../../../components/ui/custom-input/CustomInput";
import FormLayout from "../../../components/ui/form-layout/FormLayout";
import classes from "./RegisterForm.module.css";
import { useValidate } from "../hooks/useValidate";
import { Link } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import { useHttp } from "../hooks/useHttp";

const RegisterForm = () => {
  const {
    value: enteredEmail,
    valueChangeHandler: emailChangeHandler,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    isValidated: emailIsValidated,
  } = useInput("email");

  const {
    value: enteredPassword,
    valueChangeHandler: passwordChangeHandler,
    valueIsValid: passwordIsValid,
    hasError: passwordHasError,
    inputBlurHandler: passwordBlurHandler,
    isValidated: passwordIsValidated,
  } = useInput("password");

  const {
    value: enteredRepeatedPassword,
    valueChangeHandler: repeatedPasswordChangeHandler,
    inputBlurHandler: repeatedPasswordBlurHandler,
    isTouched: repeatedPasswordIsTouched,
  } = useInput("repeated-password");

  const {
    value: enteredName,
    valueChangeHandler: nameChangeHandler,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    inputBlurHandler: nameBlurHandler,
    isValidated: nameIsValidated,
  } = useInput("name");

  const {
    value: enteredSurname,
    valueChangeHandler: surnameChangeHandler,
    valueIsValid: surnameIsValid,
    hasError: surnameHasError,
    inputBlurHandler: surnameBlurHandler,
    isValidated: surnameIsValidated,
  } = useInput("surname");

  const [validEmail, validPassword, passwordsMatch, validName] = useValidate();

  const formIsValid =
    emailIsValidated &&
    passwordIsValidated &&
    passwordsMatch(enteredPassword, enteredRepeatedPassword) &&
    nameIsValidated &&
    surnameIsValidated;

  const sendRegisterRequest = useHttp(
    "register",
    enteredEmail,
    enteredPassword
  );

  const setNewUser = (name, surname, email, favourites = [], orders = []) => {
    fetch("https://techshop-f37c5-default-rtdb.firebaseio.com/users.json/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name,
        surname,
        email,
        favourites,
        orders,
      }),
    });
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();

    if (formIsValid)
      sendRegisterRequest()
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              throw new Error("Failed!");
            });
          }
        })
        .then((data) => {
          const email = data.email;
          setNewUser(enteredName, enteredSurname, email);
        })
        .catch((err) => alert(err.message));
  };

  return (
    <FormLayout onSubmit={onFormSubmitHandler}>
      <div>
        <CustomInput
          onChange={emailChangeHandler}
          type="email"
          placeholder="Email"
          value={enteredEmail}
          onBlur={emailBlurHandler}
          hasError={emailHasError}
          validated={emailIsValidated}
        ></CustomInput>
        {emailHasError && (
          <p className={classes.error}>
            {emailIsValid === "empty"
              ? "This field is obligatory"
              : "Invalid e-mail adress."}
          </p>
        )}
      </div>

      <div className={classes["inputs-box"]}>
        <div>
          <CustomInput
            type="text"
            placeholder="Name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            hasError={nameHasError}
            validated={nameIsValidated}
          ></CustomInput>
          {nameHasError && (
            <p className={classes.error}>
              {nameIsValid === "empty"
                ? "This field is obligatory"
                : "Invalid name entered."}
            </p>
          )}
        </div>
        <div>
          <CustomInput
            type="text"
            placeholder="Surname"
            value={enteredSurname}
            onChange={surnameChangeHandler}
            onBlur={surnameBlurHandler}
            hasError={surnameHasError}
            validated={surnameIsValidated}
          ></CustomInput>
          {surnameHasError && (
            <p className={classes.error}>
              {surnameIsValid === "empty"
                ? "This field is obligatory"
                : "Invalid surname entered."}
            </p>
          )}
        </div>
      </div>
      <div className={classes["inputs-box"]}>
        <div>
          <CustomInput
            onChange={passwordChangeHandler}
            type="password"
            placeholder="Password"
            value={enteredPassword}
            onBlur={passwordBlurHandler}
            hasError={passwordHasError}
            validated={passwordIsValidated}
          ></CustomInput>
          {passwordHasError && (
            <p className={classes.error}>
              {passwordIsValid === "empty"
                ? "This field is obligatory"
                : "Invalid password."}
            </p>
          )}
        </div>

        <div>
          <CustomInput
            onChange={repeatedPasswordChangeHandler}
            type="password"
            placeholder="Repeat password"
            value={enteredRepeatedPassword}
            onBlur={repeatedPasswordBlurHandler}
            hasError={
              !passwordsMatch(enteredRepeatedPassword, enteredPassword) ||
              (repeatedPasswordIsTouched &&
                enteredRepeatedPassword.trim() === "")
            }
            validated={
              passwordsMatch(enteredPassword, enteredRepeatedPassword) &&
              enteredPassword.trim() !== ""
            }
          ></CustomInput>
          {!passwordsMatch(enteredPassword, enteredRepeatedPassword) &&
            enteredRepeatedPassword.trim() !== "" && (
              <p className={classes.error}>Passwords don't match</p>
            )}
          {repeatedPasswordIsTouched &&
            enteredRepeatedPassword.trim() === "" && (
              <p className={classes.error}>This field is obligatory</p>
            )}
        </div>
      </div>

      <CustomInput
        type="submit"
        value="Register"
        formIsValid={formIsValid}
      ></CustomInput>
      <div className={classes.register}>
        <p>
          <Link to="/login">Already have an account?</Link>
        </p>
        <span>
          <Link to="/login">Log in here</Link>
        </span>
      </div>
    </FormLayout>
  );
};

export default RegisterForm;
