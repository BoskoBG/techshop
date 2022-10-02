import { useState } from "react";
import { useValidate } from "./useValidate";

export const useInput = (type) => {
  const [validEmail, validPassword, passwordsMatch, validName] = useValidate();

  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let valueIsValid;

  switch (type) {
    case "email":
      valueIsValid = validEmail(enteredValue);
      break;
    case "password":
      valueIsValid = validPassword(enteredValue);
      break;
    case "repeated-password":

    case "name":
      valueIsValid = validName(enteredValue);
      break;
    case "surname":
      valueIsValid = validName(enteredValue);
      break;
    default:
      break;
  }

  const hasError = (!valueIsValid || valueIsValid === "empty") && isTouched;

  let isValidated = valueIsValid && valueIsValid !== "empty" && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    valueIsValid,
    isTouched,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValidated,
  };
};
