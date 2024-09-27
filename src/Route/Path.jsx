import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "../Pages/SignIn/SignIn";
import SignUP from "../Pages/SignUp/SignUP";
import CreateMovie from "../Pages/CreateMovie/CreateMovie";
import UpdateMovie from "../Pages/UpdateMovie/UpdateMovie";
import MoviePage from "../Pages/MoviePage/MoviePage";
import Cookies from "js-cookie";
import LOading from "../common/Loading/Loading";

const Path = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  const handleToken = () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
    setLoading(false); 
  };

  useEffect(() => {
    handleToken();
  }, []);

  useEffect(() => {
    console.log(`Authenticated changed to: ${authenticated}`);
  }, [authenticated]);

  if (loading) {
    <LOading/>
  }

  return (
    <Routes>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUP />} />
      <Route path="/CreateMovie" element={<CreateMovie />} />
      <Route path="/MoviePage" element={<MoviePage />} />
      <Route path="/UpdateMovie" element={<UpdateMovie />} />
      <Route
        path="/"
        element={
          <ProtectedRoute
            element={<MoviePage />}
            isauthenticated={ localStorage.getItem("access_token")}
          />
        }
      />
    </Routes>
  );
};

// Protected route logic
const ProtectedRoute = ({ element, isauthenticated }) => {
  return isauthenticated ? element : <Navigate to="/SignIn" />;
};



export default Path;
