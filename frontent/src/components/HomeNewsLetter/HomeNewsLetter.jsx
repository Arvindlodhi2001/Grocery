import React from "react";
import "./HomeNewsLetter.css";
import Button from "@mui/material/Button";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const HomeNewsLetter = () => {
  return (
    <>
      <div className="newsLatter">
        <SendOutlinedIcon className="SendOutlinedIcon" />
        <input type="email" placeholder="Your email address" name="text" />
        <Button className="bg-g">Subscribe</Button>
      </div>
    </>
  );
};

export default HomeNewsLetter;
