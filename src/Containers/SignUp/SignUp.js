import BoxWrapper from "../../Components/BoxWrapper/BoxWrapper";
import "./SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { recruiterActions } from "../../Store/Index";
import { useDispatch } from "react-redux";

const isEmpty = (value) => value.trim() === "";

const SignUp = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const signUpTypeHandler = (e) => {
    setSignUpType(e.target.value);
  };

  const [nameIsValid, setNameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [signUpType, setSignUpType] = useState();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const pass1Ref = useRef();
  const pass2Ref = useRef();
  const skillsRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const pass1 = pass1Ref.current.value;
    const pass2 = pass2Ref.current.value;
    const enteredSkills = skillsRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredPasswordsMatch =
      pass1 === pass2 && !isEmpty(pass1) && !isEmpty(pass2);

    setNameIsValid(enteredNameIsValid);
    setEmailIsValid(enteredEmailIsValid);
    setPasswordsMatch(enteredPasswordsMatch);

    const formIsValid =
      enteredNameIsValid && enteredEmailIsValid && enteredPasswordsMatch;

    if (!formIsValid) {
      return;
    } else {
      fetch("https://jobs-api.squareboat.info/api/v1/auth/register", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          userRole: signUpType,
          password: pass1,
          confirmPassword: pass2,
          name: enteredName,
          skills: enteredSkills,
        }),
      })
        .then((response) => {
          if (response.status === 200) {
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Fragment>
      <Navbar />
      <BoxWrapper heading="Signup" styleClass="signup">
        <form id="SignupForm" className="form" onSubmit={formSubmitHandler}>
          <div className="form-row">
            <label>I'm a*</label>
            <div className="signup-type" onChange={signUpTypeHandler}>
              <label className="recruiter-checkbox">
                <input
                  type="radio"
                  name="signupType"
                  id="recruiterRadio"
                  value="0"
                />
                <span>
                  <FontAwesomeIcon icon={faUserTie} size="lg" />
                  <p>Recruiter</p>
                </span>
              </label>
              <label className="candidate-checkbox">
                <input
                  type="radio"
                  name="signupType"
                  id="candidateRadio"
                  value="1"
                />
                <span>
                  <FontAwesomeIcon icon={faUserGraduate} size="lg" />
                  <p>Candidate</p>
                </span>
              </label>
            </div>
          </div>
          <div className="form-row first-row">
            <label>Full Name*</label>
            <input
              type="text"
              className=""
              placeholder="Enter your full name"
              ref={nameInputRef}
            />
            {!nameIsValid && (
              <div className="form-error-div">
                <div className="form-error ">This field is mandatory.</div>
              </div>
            )}
          </div>
          <div className="form-row">
            <label>Email Address*</label>
            <input
              type="email"
              className=""
              placeholder="Enter your email"
              ref={emailInputRef}
            />
            {!emailIsValid && (
              <div className="form-error-div">
                <div className="form-error ">Invalid email address</div>
              </div>
            )}
          </div>
          <div className="form-row password-row">
            <div className="createpass">
              <label>Create Password*</label>
              <input
                type="password"
                className=""
                placeholder="Enter your password"
                ref={pass1Ref}
              />
            </div>
            <div className="confirmpass">
              <label>Confirm Password*</label>
              <input
                type="password"
                className=""
                placeholder="Enter your password"
                ref={pass2Ref}
              />
              {!passwordsMatch && (
                <div className="form-error-div">
                  <div className="form-error ">This field is mandatory.</div>
                </div>
              )}
            </div>
          </div>
          <div className="form-row">
            <label>Skills</label>
            <input
              type="text"
              className=""
              placeholder="Enter comma seperated skills"
              ref={skillsRef}
            />
          </div>
          <div className="form-btn-div">
            <button className="btn btn-filled">Signup</button>
          </div>
          <div className="form-extra-actions-row">
            <p>Have an account?</p>
            <Link to="/login">
              <button className="text-btn" type="submit">
                Login
              </button>
            </Link>
          </div>
        </form>
      </BoxWrapper>
    </Fragment>
  );
};

export default SignUp;
