import "./App.css";
import { Fragment } from "react";
import Navbar from "./Containers/Navbar/Navbar";
import PageContent from "./Containers/PageContent/PageContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import SignUp from "./Containers/SignUp/SignUp";
import Login from "./Containers/Login/Login";
import ForgotPassword from "./Containers/ForgotPassword/ForgotPassword";
import PasswordReset from "./Containers/PasswordReset/PasswordReset";
import JobPost from "./Containers/JobPost/JobPost";
import AllJobs from "./Containers/AllJobs/AllJobs";

function App() {
  return (
    <Fragment>
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/reset-password" element={<PasswordReset />} />
          <Route exact path="/job-post" element={<JobPost />} />
          <Route exact path="/all-jobs" element={<AllJobs />} />
        </Routes>
      </Router>
      {/* <PageContent /> */}
    </Fragment>
  );
}

export default App;
