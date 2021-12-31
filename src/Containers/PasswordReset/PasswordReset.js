import BoxWrapper from "../../Components/BoxWrapper/BoxWrapper";
import "./PasswordReset.css";
import Navbar from "../Navbar/Navbar";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <Fragment>
      <Navbar />
      <BoxWrapper heading="Reset Your Password" styleClass="resetpass">
        <form className="form" id="PasswordResetForm">
          <div className="form-row">
            <p className="passreset-text">Enter your new password below.</p>
          </div>
          <div className="form-row">
            <label>New Password</label>
            <input
              type="password"
              className=""
              placeholder="Enter your password"
            />
          </div>
          <div className="form-row">
            <label>Confirm new password</label>
            <input
              type="password"
              className=""
              placeholder="Enter your password"
            />
          </div>
          <div className="form-btn-div">
            <button className="btn btn-filled">Reset</button>
          </div>
        </form>
      </BoxWrapper>
    </Fragment>
  );
};

export default PasswordReset;
