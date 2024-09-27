import React from "react";

const LOading = () => {
  return (
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-6 d-flex justify-content-center">
        <div
          className="spinner-border"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LOading;
