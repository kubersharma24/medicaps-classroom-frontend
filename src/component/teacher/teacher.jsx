import React, { useState, useEffect } from "react";
import "./teacher.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faLandmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Teacher() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("email")) {
      navigate("/loginpage");
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const logoutButton = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("status");
    navigate("/loginpage");
  };

  return (
    <>
      <nav id="navbar">
        <div className="checkbtn">
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggle}
            className="fontstyle"
          />
        </div>
        <div className="App_Name">CLASS CONNECT</div>
        <ul className="list-item">
          <li>{localStorage.getItem("email")}</li>

          <li>
            <button onClick={logoutButton} className="btn">
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <div className="flex-box">
        {/* <div id="left-box"> */}
        <div
          className={`inner-left-box ${isOpen ? "inner-left-box-hover" : ""} ${
            isHovered ? "inner-left-box-hover" : ""
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`homeIcon ${isOpen ? "homeIcon-expand" : ""} ${
              isHovered ? "homeIcon-expand" : ""
            }`}
          >
            <Link to="/teacher" className="linkTag">
              <FontAwesomeIcon icon={faHome} id="home" />
              Home
            </Link>
          </div>
          <div
            className={`homeIcon ${isOpen ? "homeIcon-expand" : ""} ${
              isHovered ? "homeIcon-expand" : ""
            }`}
          >
            <Link to="/teacher/classes" className="linkTag">
              <FontAwesomeIcon icon={faLandmark} id="home" />
              Class
            </Link>
          </div>
        </div>
        {/* </div> */}

        <div className="class-item-style">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Teacher;
