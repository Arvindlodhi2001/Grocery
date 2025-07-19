import React from "react";
import "./PageNotFound404.css";
import NotFound404 from "../../assets/Images/NotFound404.gif";
import sadImage from "../../assets/Images/sadImage.jpeg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import CommentSection from "../Comment/CommentSection";

const PageNotFound404 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="PageNotFound">
        <div className="container-fluid">
          <div className="box">
            <div className=" MainContainer w-75 ">
              <h1>
                4<img src={NotFound404} alt="" />
                4!
              </h1>
              <h2>Page Not Found</h2>
              <div className="d-flex justify-content-center">
                <p>
                  The link you clicked may be broken or the page may have been
                  removed. visit the <Link className="text-g">Homepage</Link> or{" "}
                  <Link className="text-g">Contact</Link> us about the problem
                </p>
              </div>

              <Button onClick={() => navigate("/")}>
                {" "}
                <HomeIcon /> &nbsp; Back To Home Page <KeyboardArrowRightIcon />
              </Button>
            </div>
          </div>
        </div>
        <CommentSection
          productId={"67bb6f167fc255d2d4b7cdc7"}
          userId={"67ba1f2a5dff1cc4f1fc197f"}
        />
      </section>
    </div>
  );
};

export default PageNotFound404;
