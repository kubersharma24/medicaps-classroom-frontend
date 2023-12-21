
import { Link, Outlet } from "react-router-dom";
import "./home.css";


const Login = () => {

    return (
        <div>
            <nav className="nav">
        <p>Class Connect</p>
        <div className="nav-list">
          <input type="checkbox" name="" id="check" />
          <label for="check" className="checkbtn">
            <i className="fa fa-bars"></i>
          </label>
          <ul>
            <li>
              <Link  to="/" className="homeLink , linkTag">Home</Link>
            </li>
            <li>
              <Link className="homeLink, linkTag">About us</Link>
            </li>
            <li>
              <Link className="homeLink , linkTag">Contact Us</Link>
            </li>
            <li>
              <Link to="/loginpage" className="homeLink , linkTag">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div id="center">
        <h1 id="titles">WELCOME TO CLASS CONNECT</h1>
      </div>
      <div>
        <Outlet/>
      </div>
        </div>
        
    );
}

export default Login;