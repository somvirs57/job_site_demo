import { Fragment } from "react";
import BoxWrapper from "../../Components/BoxWrapper/BoxWrapper";
import "./JobPost.css";
import Navbar from "../Navbar/Navbar";

const JobPost = () => {
  return (
    <Fragment>
      <Navbar />
      <BoxWrapper heading="Post a Job" styleClass="postjob">
        <form className="form" id="JobForm">
          <div className="form-row">
            <label>Job title*</label>
            <input type="text" className="" placeholder="Enter job title" />
          </div>
          <div className="form-row">
            <label>Description*</label>
            <textarea className="" placeholder="Enter job description" />
          </div>
          <div className="form-row">
            <label>Location*</label>
            <input type="text" className="" placeholder="Enter location" />
            <div className="form-error-div">
              <div className="form-error ">All fields are mandatory.</div>
            </div>
          </div>
          <div className="form-btn-div">
            <button className="btn btn-filled">Post</button>
          </div>
        </form>
      </BoxWrapper>
    </Fragment>
  );
};

export default JobPost;
