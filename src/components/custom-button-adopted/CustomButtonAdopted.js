import React from "react";
import "./custom-button-adopted.styles.scss";

const CustomButtonAdopted = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`
    ${inverted ? "inverted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""}  
    custom-button-adopted`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButtonAdopted;
