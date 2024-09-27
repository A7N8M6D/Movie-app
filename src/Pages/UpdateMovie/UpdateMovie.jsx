import React from "react";
import TItle from "../../common/Title/Title";
import Input from "../../common/Input/Input";
import BUtton from "../../common/Button/Button";

const UpdateMovie = () => {
  return (
    <div
      className="container d-flex justify-content-start align-items-center  "
      style={{ height: "100vh" }}
    >
      <div className="CreatMovie-Main" style={{ width: "100%" }}>
        <div className="row">
          <div className="col-12">
            <TItle Title="Edit" fontsize="3rem" />
          </div>
        </div>
        <div className="row flex-wrap"  style={{marginTop:"80px"}} >
          <div className="col-6">
            <input type="file" className="d-none" id="file-upload" />
            <div
              className=" d-flex flex-column justify-content-start align-items-center"
              style={{
                padding: "190px 10px 190px 10px",
                margin: "",
                width:"70%",
                border: "1px solid white",
                borderStyle: "dashed",
                borderRadius: "10px",
              }}
              onClick={() => document.getElementById("file-upload").click()}
            >
              
              <i class="fa-solid fa-download"  ></i>
              <p style={{marginTop:"5px"}}>drop an image here</p>
            </div>
          </div>
          <div className="col-6">
          <Input placeholderTitle="Title" Type="text" margin="0px 0px 30px 0px" width="350px" />
          <Input placeholderTitle="Publishing year" Type="text"  width="200px"/>
          <div className="row" style={{marginTop:"80px"}}>
          <div className="col-4">

          <BUtton Title="Cancel" bgColor="rgb(9, 53, 69)" border="1px solid white" />
          </div>
          <div className="col-4">

          <BUtton Title="Submit"  bgColor="#2bd17e" border="none"/>
          </div>
        
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMovie;
