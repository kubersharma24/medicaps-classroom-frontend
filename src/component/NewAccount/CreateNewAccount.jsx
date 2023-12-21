import { Link } from "react-router-dom";
import "./create_account.css";
import React from "react";
import axios from "axios";

function CreateAccount() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email1 = e.target.email.value;
    const password1 = e.target.password.value;
    const role1 = e.target.role.value;
    const name1 = e.target.name.value;
    let data = {
      password: password1,
      role: role1,
      email: email1,
      name: name1,
    };

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8082/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div id="box">
        <h1 id="title"> Create new account</h1>
        <form action="CreateAccount" method="post" onSubmit={handleSubmit}>
          <div id="gender">
            <label>Role:</label>
            <input
              type="radio"
              name="role"
              value="Student"
              checked="checked"
            />{" "}
            Student
            <input type="radio" name="role" value="Teacher" /> Teacher{" "}
          </div>

          <div className="input-field">
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>

          <div className="input-field">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>

          <div className="input-field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
            />
          </div>
          {/* <p> ${error} </p> */}
          <div className="btn">
            <button type="Submit"> Sign Up </button>
          </div>
        </form>
        {/* <form action="Loginpage" method="get">
          <button type="Submit"> back :</button>
        </form> */}
        <div >
          <Link to="/loginpage" className="linkTag">Back</Link>
        </div>
      </div>
    </>
  );
}
export default CreateAccount;
