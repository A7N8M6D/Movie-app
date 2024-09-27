import React, { useEffect, useState } from "react";
import TItle from "../../common/Title/Title";
import Input from "../../common/Input/Input";
import BUtton from "../../common/Button/Button";
import axios from "axios";
import Api from "../../utils/Modal/Api/Api";
import Modal from "../../utils/Modal/Modal";
import LOading from "../../common/Loading/Loading";
import "../../index.css";
import UploadIMG from "../../../public/UploadIMG.png";
import Footer from "../../layout/Footer";
import "./CreateMovie.css"
const CreateMovie = () => {
  const [Title, setTitle] = useState("");
  const [Date, setYear] = useState("");
  const [clicked, setclicked] = useState(false);

  const [call, setcall] = useState(false);
  const [validation, setValidation] = useState({
    TitleValid: false,
    YearValid: false,
  });

  const { Loading, errorMessage, showModal, closeModal, handleApi } = Api(
    "https://movie-backend-flame.vercel.app/api/v1/movie/create",
    "post",
    { Title, Date }
  );

  const handleClick = () => {
    setclicked(true);
  };

  useEffect(() => {
    if (validation.TitleValid && validation.YearValid && clicked) {
      handleApi();

      setValidation((prev) => ({
        ...prev,
        TitleValid: false,
        YearValid: false,
      }));
      setclicked(false);

      setcall(false);
    }
    setclicked(false);
    console.log(
      `Cliked ${clicked} Call ${call} errorMessage ${errorMessage} Loading ${Loading} validation.TitleValid ${validation.TitleValid} validation.YearValid ${validation.YearValid} validation.usernameValid ${validation.usernameValid}  `
    );
  }, [
    validation.TitleValid,
    validation.YearValid,
    call,
    clicked,
    errorMessage,
    Loading,
  ]);

  return (
    <>
    <div
      className=" Container d-flex justify-content-start align-items-center  "
      style={{ height:"85vh"}}
    >
      {Loading ? (
        <LOading />
      ) : (
        <div className="CreatMovie-Main" style={{ width: "100%" }}>
          <div className="row">
            <div className="col-12">
              <TItle Title="Create a new Movie" ClassName="Heading-Two" />
            </div>
          </div>
          <div className="row Card" style={{ marginTop: "80px" }}>
            <div className=" Card-Left col-md-7 col-lg-6  ">
              <input type="file" className="d-none" id="file-upload" />
              <div
                className="Card-Main col-8 col-sm-8 col-md-9 col-lg-9 col-xl-10 col-xxl-8 d-flex flex-column justify-content-center align-items-center"
                style={{
                  
                  margin: "",
                  border: "1px solid white",
                  borderStyle: "dashed",
                  borderRadius: "10px",
                }}
                onClick={() => document.getElementById("file-upload").click()}
              >
                <img src={UploadIMG} />
                <p style={{ marginTop: "5px" }} className="Body-Small">
                  Drop an image here
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6  ">
            <div className="col-8 col-sm-8 col-md-5 col-lg-9 col-xl-8 col-xxl-6">

              <Input
                placeholderTitle="Title"
                Type="text"
                margin="0px 0px 30px 0px"
                // width="380px"
                call={setcall}
                name="Title"
                setValue={setTitle}
                clicked={clicked}
                setclicked={setclicked}
                setValidation={setValidation}
              />
            </div>
            <div className="col-8 col-sm-8 col-md-5 col-lg-4 col-xl-4 col-xxl-3">

              <Input
                placeholderTitle="Publishing year"
                Type="text"
                // width="200px"
                call={setcall}
                name="Year"
                setValue={setYear}
                clicked={clicked}
                setclicked={setclicked}
                setValidation={setValidation}
              />
            </div>
              <div className="row Card_Btn" style={{ marginTop: "80px" }}>
                <div className="col-4 col-sm-3 col-md-3 col-lg-5 col-xl-4 col-xxl-3">
                  <BUtton
                    Title="Cancel"
                    ClassName="Input-Color Body-Reguler"
                    border="1px solid white"
                  />
                </div>
                <div className="col-4 col-sm-3 col-md-3 col-lg-5 col-xl-4 col-xxl-3">
                  <BUtton
                    Title="Submit"
                    name="CreateMovie"
                    setValue={handleClick}
                    BgColor="#2BD17E"
                    border="none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <Modal message={errorMessage} closeModal={closeModal} />}
    </div>
        <div className="row  " style={{ position:"absolute", width:"100%", bottom:"0px",padding:"0px", margin:"0px"}}>  
        <Footer/>

        </div>
        </>
  );
};

export default CreateMovie;
