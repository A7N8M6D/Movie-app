import React from "react";
import "./Title.css"
const TItle = (props) => {
  console.log("props of title comp" ,props);
  return (
    
  

    <span className={props.ClassName} style={{ fontSize: props.fontsize, margin:props.margin }}>
      {props.Title}
    </span>
  
   
    
  );
};

export default TItle;
