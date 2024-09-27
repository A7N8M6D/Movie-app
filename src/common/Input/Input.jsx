import React, { useEffect, useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(`${props.name} ${value}`);
    props.setValue(value);
  }, [value]);

  const validate = () => {
    setError("");

    if (props.name === "E-Mail") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setError("Please enter a valid email address");
        props.setValidation((prev) => ({ ...prev, emailValid: false }));
      } else {
        props.setValidation((prev) => ({ ...prev, emailValid: true }));
      }
    } else if (props.name === "username") {
      if (value.length < 5) {
        setError("Please enter a valid username");
        props.setValidation((prev) => ({ ...prev, usernameValid: false }));
      }else {
        props.setValidation((prev) => ({ ...prev, usernameValid: true }));
      }
    } else if (props.name === "Title") {
      if (value.length < 5) {
        setError("Title with at least 5 characters");
        props.setValidation((prev) => ({ ...prev, TitleValid: false }));
      } else {
        props.setValidation((prev) => ({ ...prev, TitleValid: true }));
      }
    } else if (props.name === "Year") {
      const isNumber = /^\d+$/.test(value);
      
      if (!isNumber) {
        setError("Please enter only numbers");
        props.setValidation((prev) => ({ ...prev, YearValid: false }));
      } else if (value.length < 4) {
        setError("Please enter at least four digits");
        props.setValidation((prev) => ({ ...prev, YearValid: false }));
      } else {
        setError("");
        props.setValidation((prev) => ({ ...prev, YearValid: true }));
      }
    
    } else if (props.name === "password") {
      if (value.length < 8) {
        setError("Password with at least 8 characters");
        props.setValidation((prev) => ({ ...prev, passwordValid: false }));
      } else {
        props.setValidation((prev) => ({ ...prev, passwordValid: true }));
      }
    }
    return true;
  };

  useEffect(() => {
    if (props.clicked) {
      validate();
    }
  }, [props.clicked]);
  return (
    <div className="col-12" style={{ margin: props.margin }}>
      <input
        onChange={(e) => {
          setValue(e.target.value);
          e.preventDefault();
        }}
        style={{
          padding: props.padding,

          background: "#224957",
          width: props.width,
          height: "45px",
          color: "white",
          border: "none",
        }}
        type={props.Type}
        className="form-control"
        id="inputPassword2"
        name={props.name}
        placeholder={props.placeholderTitle}
      />

      {error && <span className="error-message" style={{color:"#EB5757"}}>{error}</span>}
    </div>
  );
};

export default Input;
