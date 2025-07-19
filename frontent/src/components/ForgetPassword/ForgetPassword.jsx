import React from "react";
import "./ForgetPassword.css";
import ForgetPasswordImg from "../../assets/Images/forgot_password.svg";
import Button from "@mui/material/Button";

const ForgetPassword = () => {
  return (
    <div>
      <div className="container-fluid BoxContainerr ">
        <div className="d-flex justify-content-center   ">
          <div className=" border row MainContainerBox  ">
            <div className="col-md-6 FirstPart text-center p-4">
              <img src={ForgetPasswordImg} alt="ForgetPasswordImg" />
              <div className="TextArea">
                <h2 className="text-center">Forgot your password?</h2>
                <p>
                  Not to worry, we got you! Let’s get you a new password. Please
                  enter your email address or your Username.
                </p>
              </div>
            </div>
            <div className="col-md-6 SecondPartForgetPassword">
              <div className="text-center">
                <h1 className="fs-1 fw-5 p-5">
                  <u className="fw-bold">Forgot password?</u>
                </h1>
              </div>
              <div className="mt-5">
                <label htmlFor="html">User Email *</label>
                <div>
                  {" "}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Please enter user email"
                    name="StreetNo"
                    id=""
                  />
                </div>{" "}
              </div>
              <div className="mt-4">
                <label htmlFor="html">Security Code *</label>
                <div className="row">
                  {" "}
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Please enter user email"
                      name="StreetNo"
                      id=""
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Please enter user email"
                      value={4566}
                      name="StreetNo"
                      id=""
                    />
                  </div>
                </div>{" "}
                {/* I agree to terms & Policy. */}
                <div className="mt-4">
                  <input type="checkbox" name="" id="" />
                  <span className="fs-5"> I agree to terms & Policy.</span>
                </div>
                {/* Button */}
                <div className="d-flex justify-content-center">
                  <Button className="ResetButton">Reset Password</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
