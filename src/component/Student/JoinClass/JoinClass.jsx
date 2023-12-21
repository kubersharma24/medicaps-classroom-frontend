import React, { useState } from "react";
import axios from "axios";


function JoinClass({ isOpen, onClose }) {

  
  const [joinData, setJoinData] = useState({
      classCode: "",
      userId: localStorage.getItem("email"),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJoinData({ ...joinData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8082/students',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : joinData
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("Registration Data:", joinData);
    e.target.reset();
    onClose();
  };

  return (
    <>
      <div className={`modal ${isOpen ? "open" : ""}`}>
        <div className="center-form">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <h2>Create New Class</h2>
          <form onSubmit={handleSubmit}>
           
            <div className="input">
              <input
                type="text"
                name="userId"
                readOnly
                placeholder="Email"
                value={joinData.userId}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <input
                type="text"
                name="classCode"
                placeholder="class code"
                value={joinData.classCode}
                onChange={handleChange}
              />
            </div>
            
            <div className="btn">
              <button type="submit">Register</button>
            </div>{" "}
          </form>
        </div>
      </div>
    </>
  );
}




export default JoinClass;