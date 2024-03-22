import React from "react";
import "../styles/Form.css";
const InputField = ({
  label,
  name,
  type,
  value,
  handleChange,
  error,
  handleBlur,
  touched,
}) => {
  return (
    <div className="inputfield">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        autoComplete="off"
        name={name}
        id={name}
        placeholder={label}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && touched ? <p style={{ color: "#b22b27" }}>{error}</p> : null}
    </div>
  );
};

export default InputField;
