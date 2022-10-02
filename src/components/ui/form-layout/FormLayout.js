import React from "react";
import classes from "./FormLayout.module.css";

const FormLayout = (props) => {
  return <form onSubmit={props.onSubmit}>{props.children}</form>;
};

export default FormLayout;
