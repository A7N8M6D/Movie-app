import React, { useEffect, useState } from "react";
import TItle from "../../common/Title/Title";
import Input from "../../common/Input/Input";
import CheckBox from "../../components/SignIn/CheckBox/CheckBox";
import BUtton from "../../common/Button/Button";
import { Link } from "react-router-dom";
import "./SignIn.css"
import "../../index.css"
import axios from "axios";
import Footer from "../../layout/Footer";
const Modal = ({ message, closeModal }) => (
    <div className="modal show" tabIndex={-1} style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Error</h5>
          <div className="modal-body">
            <p style={{color:"black"}}>{message}</p>
          </div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
         
        </div>
      </div>
    </div>
  );
const SignIn = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [clicked, setclicked] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [call, setcall] = useState(false);
  const [validation, setValidation] = useState({
    emailValid: false,
    passwordValid: false
  });
  const [errorMessage, setErrorMessage] = useState(""); // Error state for modal
  const [showModal, setShowModal] = useState(false);
  const [message ,setMessage]=useState({})
  const handleApi = async () => {
    setLoading(true);
    try {
        const response = await axios.post(
            "https://movie-backend-flame.vercel.app/api/v1/users/SignIn",
            {
                Email,
                Password,
            },
            { withCredentials: true }
        );
        console.log("Response:", response.data);
        localStorage.setItem('access_token', response.data.accessToken);
        setErrorMessage(response.data.message); 
        setShowModal(true);
        
    } catch (error) {
        console.log("Error response:", error.response); 
        const errorMsg = error.response?.data?.error || error.message || 'An error occurred';
        console.log("Eroro",errorMsg)
        setErrorMessage(errorMsg); 
        setShowModal(true);
    } finally {
        setLoading(false);
    }
};

  const handleClick = () => {
    setclicked(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(()=>{
    if(validation.emailValid && validation.passwordValid )
    {

        handleApi();
        setclicked(false)

        setcall(false)
        
    }
    setclicked(false)
    console.log(`Cliked ${clicked} Call ${call} errorMessage ${errorMessage}` ) 
  },[validation.emailValid,validation.passwordValid,call ,clicked,errorMessage])
  
  return (
    <div className="">
      {Loading ? (
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
      ) : (
        <>

        <div
          className="  d-flex flex-column justify-content-center align-items-center"
          style={{ height: "84.8vh" }}
        >
          <div
            className="col-5 d-flex flex-column justify-content-between align-items-center"
            style={{ height:"360px" , width:"300px" }}
          >
            <TItle ClassName="Heading-One" Title="Sign in"  />
            <Input
              placeholderTitle="Email"
              clicked={clicked}
              Type="text"
              name="E-Mail"
              call={setcall}
              setValue={setEmail}
              setclicked={setclicked}
              setValidation={setValidation}
            />
            <Input
              placeholderTitle="Password"
              clicked={clicked}
              Type="password"
              name="password"
              call={setcall}
              setclicked={setclicked}
              setValidation={setValidation}
              setValue={setPassword}
            />
            <div style={{ display: "flex" }}>
              <CheckBox />
              <Link to="/SignUp" style={{ textDecoration: "none" }}>
                <p
                  className="ms-3 "
                  style={{ color: "orange", fontWeight: "bold" }}
                >
                  {" "}
                  Sign Up
                </p>
              </Link>
            </div>

            <BUtton Title="Login"  name="SignIn" setValue={handleClick} BgColor="#2BD17E" ClassName ="Primary-Color Body-Reguler"/>
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

export default SignIn;
