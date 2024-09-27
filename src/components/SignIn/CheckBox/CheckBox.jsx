import React from "react";
import "../../../index.css"
const CheckBox = () => {
  return (
    <div class="form-check ">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label class="form-check-label Body-Small" for="flexCheckDefault">
        Remember me
      </label>
    </div>
  );
};

export default CheckBox;
