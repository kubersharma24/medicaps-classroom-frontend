import React, { useState } from "react";
import axios from "axios";
import "./CreateNewClass.css";

function RegistrationForm({ isOpen, onClose }) {

  
  const [formData, setFormData] = useState({
    name: localStorage.getItem("email").split("@")[0],
    email: localStorage.getItem("email"),
    description: "",
    subject: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8082/teachers",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("Registration Data:", formData);
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
                name="name"
                readOnly
                placeholder="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <input
                type="text"
                name="email"
                readOnly
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <input
                type="text"
                name="description"
                placeholder="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
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

export default RegistrationForm;
