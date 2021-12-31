import "./Login.css";
import BoxWrapper from "../../Components/BoxWrapper/BoxWrapper";
import Navbar from "../Navbar/Navbar";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <Navbar />
      <BoxWrapper heading="Login" styleClass="login">
        <form action="" id="LoginForm" className="form">
          <div className="form-row">
            <label>Email address</label>
            <input type="email" className="" placeholder="Enter your email" />
          </div>
          <div className="form-row">
            <div className="login-password-row">
              <label>Password</label>
              <div className="forgot-pass">
                <Link to="/forgot-password">
                  <button className="text-btn">Forgot your password?</button>
                </Link>
              </div>
            </div>
            <input
              type="password"
              className="long-input"
              placeholder="Enter your password"
            />
            <div className="form-error-div">
              <div className="form-error hidden">
                Incorrect email or password
              </div>
            </div>
          </div>
          <div className="form-btn-div">
            <button className="btn btn-filled">Login</button>
          </div>
          <div className="form-extra-actions-row">
            <p>New to MyJobs?</p>
            <Link to="/signup">
              <button className="text-btn">Create an account</button>
            </Link>
          </div>
        </form>
      </BoxWrapper>
    </Fragment>
  );
};

export default Login;
