import BoxWrapper from "../../Components/BoxWrapper/BoxWrapper";
import "./ForgotPassword.css";
import Navbar from "../Navbar/Navbar";
import { Fragment } from "react";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
  return (
    <Fragment>
      <Navbar />
      <BoxWrapper heading="Forgot your password?" styleClass="forgotpass">
        <form id="ForgotPassForm" className="form">
          <div className="form-row forgotpasstext">
            <p className="">
              Enter the email associated with your account and we’ll send you
              instructions to reset your password.
            </p>
          </div>
          <div className="form-row">
            <label>Email address</label>
            <input type="email" className="" placeholder="Enter your email" />
          </div>
          <div className="form-btn-div">
            <button className="btn btn-filled">Submit</button>
          </div>
        </form>
      </BoxWrapper>
    </Fragment>
  );
};

export default ForgotPassword;
