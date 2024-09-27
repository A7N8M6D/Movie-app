import axios from "axios";
import React, { useEffect, useState } from "react";

const Api = (url, method, data) => {
  const [Loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message ,setMessage]=useState([])
  console.log(` URL ${url} Data ${data} Method ${method}`);

  const handleApi = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method,
        url,
        data,
        withCredentials: true,
      });
      console.log("Response:", response.data);
      const Msg =
        response?.data?.message || response.message || "An error occurred";
      console.log("Eroro", Msg);
      setErrorMessage(Msg);
      setMessage(response.data)
      console.log(`message setted ${message}`)
      console.log("errorMessage", errorMessage);
      setShowModal(true);
    } catch (error) {
      console.log("Error response:", error.response);

      const errorMsg =
        error.response?.data?.error || error.message || "An error occurred";
      console.log("Eroro", errorMsg);
      setErrorMessage(errorMsg);
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    console.log(`message set:`, message);
  }, [message]); 

  return { Loading, errorMessage, showModal, closeModal, handleApi,message };
};

export default Api;
