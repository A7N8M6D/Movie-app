import React, { useEffect, useState } from "react";
import TItle from "../../common/Title/Title";
import Input from "../../common/Input/Input";
import CheckBox from "../../components/SignIn/CheckBox/CheckBox";
import BUtton from "../../common/Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "../../utils/Modal/Modal";
import Api from "../../utils/Modal/Api/Api";
import LOading from "../../common/Loading/Loading";
import Footer from "../../layout/Footer";
import "../../index.css"
const SignUP = () => {
  const [Email, setEmail] = useState("");
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [clicked, setclicked] = useState(false);
  const [call, setcall] = useState(false);
  const [validation, setValidation] = useState({
    emailValid: false,
    passwordValid: false,
    usernameValid: false,
  });
  const { Loading, errorMessage, showModal, closeModal, handleApi ,message} = Api(
    "https://movie-backend-flame.vercel.app/api/v1/users/SignUP",
    "post",
    { Email, Password, UserName }
  );
  
  const handleClick = () => {
    setclicked(true);
  };

  useEffect(() => {
    if (
      validation.emailValid &&
      validation.passwordValid &&
      validation.usernameValid &&
      clicked
    ) {
      handleApi();

      setValidation((prev) => ({
        ...prev,
        emailValid: false,
        passwordValid: false,
        usernameValid: false,
      }));
      setclicked(false);

      setcall(false);
    }
    setclicked(false);
    console.log(
      `Cliked ${clicked} Call ${call} errorMessage ${errorMessage} Loading ${Loading} validation.emailValid ${validation.emailValid} validation.passwordValid ${validation.passwordValid} validation.usernameValid ${validation.usernameValid}  `
    );
  }, [
    validation.emailValid,
    validation.passwordValid,
    validation.usernameValid,
    call,
    clicked,
    errorMessage,
    Loading,
  ]);
useEffect(()=>{
console.log(`message ${message}`)
},[message])
  return (
    <div className="">
      {Loading ? (
        <LOading />
      ) : (
        <>
        <div
          className=" rol d-flex flex-column justify-content-center align-items-center"
          style={{ height: "84.8vh" }}
        >
          <div
            className="col-4 d-flex flex-column justify-content-between align-items-center"
            style={{ height:"360px" , width:"300px" }}
          >
            <TItle Title="Sign Up" fontsize="4rem" />
            <Input
              placeholderTitle="Email"
              Type="text"
              name="E-Mail"
              call={setcall}
              setValue={setEmail}
              clicked={clicked}
              setclicked={setclicked}
              setValidation={setValidation}
            />
            <Input
              placeholderTitle="UserName"
              Type="text"
              name="username"
              call={setcall}
              setclicked={setclicked}
              clicked={clicked}
              setValidation={setValidation}
              setValue={setUserName}
            />
            <Input
              placeholderTitle="Password"
              Type="password"
              name="password"
              call={setcall}
              setclicked={setclicked}
              clicked={clicked}
              setValidation={setValidation}
              setValue={setPassword}
            />
            <div style={{ display: "flex" }}>
              <CheckBox />
              <Link to="/" style={{ textDecoration: "none" }}>
                <p
                  className="ms-3"
                  style={{ color: "orange", fontWeight: "bold" }}
                >
                  {" "}
                  Sign In
                </p>
              </Link>
            </div>
            <BUtton className="Primary-Color" BgColor="#2BD17E" Title="Sign Up" name="SignUP" setValue={handleClick} />
          </div>
        </div>
        <div className="row" style={{padding:"0px", margin:"0px"}}>  
        <Footer/>

        </div>
        </>
      )}
      {showModal && <Modal message={errorMessage} closeModal={closeModal} />}
    </div>
  );
};

export default SignUP;
