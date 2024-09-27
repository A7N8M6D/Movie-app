import React, { useEffect, useState } from "react";
import TItle from "../../common/Title/Title";
import BUtton from "../../common/Button/Button";
import Api from "../../utils/Modal/Api/Api";
import { Link, useNavigate } from "react-router-dom";
import LOading from "../../common/Loading/Loading";
import Modal from "../../utils/Modal/Modal";
import CreateIMG from "../../../public/CreateIMG.png";
import LogoutIMG from "../../../public/Logout.png";
import "./MoviePage.css";
import "../../index.css";
import Footer from "../../layout/Footer";
const MoviePage = () => {
  const { Loading, errorMessage, showModal, closeModal, handleApi, message } =
    Api("https://movie-backend-flame.vercel.app/api/v1/movie/get", "get", {});
  const [Movies, setMovies] = useState([]);
  const [Data, setData] = useState(false);
  const [Check, setCheck] = useState(false);
  useEffect(() => {
    handleApi();
  }, []);
  const Navigate = useNavigate();
  useEffect(() => {
    console.log(`message received:`, message);
    if (message && Array.isArray(message.Movies)) {
      setMovies(message.Movies);
      if (message.Movies.length > 0) {
        setData(true);
      } else {
        setData(false);
      }
      setCheck(true);
    }
  }, [message]);
  const handleLogout = () => {
    console.log("Logout");
    localStorage.removeItem("access_token");
    Navigate("/SignIn");
  };
  return (
    <>
      <div className=" Container" style={{}}>
        {!Check && Loading ? (
          <LOading />
        ) : !Data ? (
          <div
            className="row  d-flex flex-column justify-content-center align-items-center "
            style={{ height: "100vh" }}
          >
            <div className="col-8 text-center">
              <TItle Title="Your Movie List is Empty" fontsize="3rem" />
            </div>
            <Link
              to={"/CreateMovie"}
              className=" d-flex  justify-content-center align-items-center"
            >
              <div className="col-2" style={{ marginTop: "30px" }}>
                <BUtton
                  Title="Add a new movie"
                  bgColor="#2bd17e"
                  border="none"
                />
              </div>
            </Link>
          </div>
        ) : (
          <>
            <div
              className="row d-flex justify-content-between align-items-center"
              style={{ marginBottom: "100px" }}
            >
              <div className=" col-sm-5 col-md-5 col-lg-5 col-xl-4 col-xxl-3 d-flex justify-content-start align-items-center fs-1">
                <TItle
                  Title="My movies"
                  ClassName=" text-center  Heading-Two"
                  fontsize=""
                  margin="0px 0px 0xp 0px"
                />
                <Link to={"/CreateMovie"}>
                  <img src={CreateIMG} style={{ marginLeft: "12px" }} />
                </Link>
              </div>
              <div
                onClick={handleLogout}
                className=" col-2 d-flex justify-content-end align-items-center  "
              >
                <TItle
                  Title="Logout"
                  ClassName="Body-Reguler"
                  margin="0px 15px 0px 0px"
                />

                <img src={LogoutIMG} />
              </div>
            </div>

            <div
              className="  row row-gap-4 Card-Mian"
              style={{ marginBottom: "100px" }}
            >
              {Movies.map((data) => {
                return (
                  <div
                    className=" col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2 "
                    style={{ height: "504px" }}
                    key={data._id}
                  >
                    <div
                      className="card"
                      style={{
                        height: "100%",
                        color: "white",
                        background: "rgb(12, 33, 40)",
                      }}
                    >
                      <img
                        src="https://th.bing.com/th/id/OIP.R0EtceeEgHmCCP-g4-g-7wHaIX?w=640&h=723&rs=1&pid=ImgDetMain"
                        className="card-img-top"
                        alt="..."
                        style={{ width: "98%", height: "400px" }}
                      />
                      <div className="card-body">
                        <p className="card-text">{data.Title}</p>
                        <p className="card-text">{data.Date}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <div
                className="col-12 d-flex justify-content-center alig-items-center bg-none"
                style={{ background: "none" }}
              >
                <nav aria-label="...">
                  <ul class="pagination">
                    <li class="page-item disabled">
                      <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item active" aria-current="page">
                      <span class="page-link">2</span>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="row" style={{ padding: "0px", margin: "0px" }}>
        <Footer />
      </div>
    </>
  );
};

export default MoviePage;
