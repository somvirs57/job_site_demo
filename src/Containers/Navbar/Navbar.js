import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { recruiterActions } from "../../Store/Index";

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const loggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(recruiterActions.logoutUser());
  };

  const backgroundClasses = loggedIn
    ? `header-background header-sm`
    : "header-background";

  const dropdownClasses = dropdownVisible
    ? "dropdown-content dropdown-show"
    : "dropdown-content";
  const dropdownToggler = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  const loginBtn = (
    <Link to="/login">
      <button className="btn btn-outlined">
        <strong> Login/Signup </strong>
      </button>
    </Link>
  );
  const loggedInBtn = (
    <div className="loggedInActions">
      <button className="nav-post-job-btn selected">Post a Job</button>
      <div className="profile-dropdown" onClick={dropdownToggler}>
        <p className="profile-circle">
          <span>R</span>
        </p>
        <FontAwesomeIcon icon={faSortDown} size="lg" />
        <div className={dropdownClasses}>
          <Link to="/" onClick={logoutHandler}>
            <li>Logout</li>
          </Link>
        </div>
      </div>
    </div>
  );

  const loginInActions = !loggedIn ? loginBtn : loggedInBtn;

  return (
    <section>
      <div className={backgroundClasses}></div>
      <div className="container">
        <nav>
          <p className="h-fit nav-heading">
            <strong>
              My<span className="nav-head-span">Jobs</span>
            </strong>
          </p>
          <div className="nav-actions">{loginInActions}</div>
        </nav>
      </div>
    </section>
  );
}
