import React from "react";
import "./form-input-small.scss";

const FormInputSmall = ({ handleChange, label, type, ...otherProps }) => (
  <div className="group">
    {/* {console.log({ ...otherProps }, "...otherprops")} */}
    <input
      className="form-input"
      type={type}
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInputSmall;
