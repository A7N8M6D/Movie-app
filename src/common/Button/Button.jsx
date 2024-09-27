import React, { useEffect } from "react";
import "../../index.css";
import "./Button.css"
const BUtton = (props) => {
  useEffect(() => {
    console.log(`Button Props ${props}`);
  }, [props]);
  return (
    <button
      type="submit"
      onClick={() => {
        props.setValue(props.name);
      }}
      className={`btn  btn-lg Body-Reguler  ${props.ClassName}`}
      style={{
        padding: "10px 0px 10px 0px",
        width: "100%",
        border: props.border,
        color:"white",
        backgroundColor:props.BgColor
      }}
    >
      {props.Title}
    </button>
  );
};

export default BUtton;
