import axios from "axios";
import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

function Loginmain() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = {
      email: email,
      password: password,
    };
    
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8082/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
       if(response.data.status==='Teacher' ){
          console.log(JSON.stringify(response.data));
          localStorage.setItem('email', response.data.email)
          localStorage.setItem('status', response.data.status)
          navigate("/teacher")
        }
        else if(response.data.status==='Student'){
          console.log(JSON.stringify(response.data));
          localStorage.setItem('email', response.data.email)
          localStorage.setItem('status', response.data.status)
          navigate("/student")
        }
        else if(response.data.status==='Incorrect password'){
          alert('enter correct password')
        }
      },[])
      .catch((error) => {
        console.log(error);
      });
    // Send the user data to the backend API
  };

  return (
    <div>
      <div className="login-box">
        <div className="box">
          <p className="center-text">Sign up page </p>
          {/* <p> ${signUpMassage} </p>	 */}
          <form action="login" method="post" onSubmit={handleSubmit}>
            <div className="login_input">
              <input id="email" name="email" placeholder="Email" />
            </div>

            <div className="login_input">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="a-tag">
              <Link to="/createAccount" className="linkTag">Create new account ?</Link>
            </div>

            {/*<div> <p> ${error} </p></div> */}
            <div className="center-text">
              <button type="Submit" className="btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginmain;
