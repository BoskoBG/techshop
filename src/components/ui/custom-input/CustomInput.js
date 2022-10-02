import React from "react";
import classes from "./CustomInput.module.css";
import { useInput } from "../../../pages/login-register/hooks/useInput";
import { BsFillCheckCircleFill } from "react-icons/bs";

const CustomInput = React.forwardRef((props, ref) => {
  //  const {value:} = useInput(props.type)

  const inputClass =
    props.type === "submit"
      ? props.formIsValid
        ? `${classes.input} ${classes["input-submit"]}`
        : `${classes.input} ${classes["input-submit-invalid"]}`
      : !props.hasError
      ? classes.input
      : `${classes.input} ${classes.error}`;

  return (
    <div className={classes.container}>
      <input
        ref={ref}
        className={inputClass}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      ></input>
      {props.validated && (
        <div className={classes.check}>
          <BsFillCheckCircleFill></BsFillCheckCircleFill>
        </div>
      )}
    </div>
  );
});

export default CustomInput;
