import React, { useState } from "react";
import "./ResetPassword.css";
import ResetPasswordImage from "../../assets/Images/reset_password.svg";
import Button from "@mui/material/Button";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ResetPassword = () => {
  const [OpenPassword, setOpenPassword] = useState(false);
  const [ConformPassword, setConformPassword] = useState(false);
  return (
    <div>
      <div>
        <div className="container-fluid BoxContainerr ">
          <div className="d-flex justify-content-center   ">
            <div className=" border row MainContainerBox  ">
              <div className="col-md-6 FirstPart text-center p-4">
                <img src={ResetPasswordImage} alt="ResetPasswordImage" />
                <div className="TextArea">
                  <h2 className="text-center">Set new password</h2>
                  <p className="textSummary">
                    Please create a new password that you don’t use on any other
                    site.
                  </p>
                  <h4 className="text-light fw-bold">Password must</h4>
                  <p className="PasswordSetTitle">
                    Be between 9 and 64 characters Include at least tow of the
                    following:
                  </p>
                  <ul>
                    <li>An uppercase character</li>
                    <li>A lowercase character</li>
                    <li>A number</li>
                    <li>A special character</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 SecondPartForgetPassword">
                <div className="text-center">
                  <h1 className="fs-1 fw-5 HeadlineTitle">
                    <u className="fw-bold">Set new password</u>
                  </h1>
                </div>
                <div className="mt-5">
                  <label htmlFor="html">Password *</label>
                  <div className="d-flex">
                    {" "}
                    <input
                      type={OpenPassword == true ? "text" : "password"}
                      className="form-control"
                      placeholder="Please enter create password"
                      name="StreetNo"
                      id=""
                    />
                    <div
                      className="mt-1 "
                      onClick={() => setOpenPassword(!OpenPassword)}
                    >
                      {OpenPassword == true ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </div>
                  </div>{" "}
                </div>
                <div className="mt-4">
                  <label htmlFor="html">Conform Password *</label>
                  <div className="d-flex">
                    {" "}
                    <input
                      type={ConformPassword == true ? "text" : "password"}
                      className="form-control"
                      placeholder="Please enter conform password"
                      name="StreetNo"
                      id=""
                    />
                    <div
                      className="mt-1 "
                      onClick={() => setConformPassword(!ConformPassword)}
                    >
                      {ConformPassword == true ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </div>
                  </div>{" "}
                  {/* Button */}
                  <div className="d-flex justify-content-center ">
                    <Button className="ResetButton">Reset Password</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
