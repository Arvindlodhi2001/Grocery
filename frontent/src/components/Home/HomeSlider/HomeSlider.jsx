import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSlider.css";

import Button from "@mui/material/Button";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SlideImage1 from "../../../assets/Images/slider-1.png";
import SlideImage2 from "../../../assets/Images/slider-2.png";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    touch: true,
  };

  return (
    <div className="HomeSlid">
      <div className="container-fluid">
        <Slider {...settings} className="Home_slider_Main">
          <div className="item">
            <img src={SlideImage1} alt="Slide 1" height="538px" />
            <div className="info">
              <h2 className="display-2 mb-4">
                Don’t miss amazing <br />
                grocery deals
              </h2>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
          <div className="item">
            <img src={SlideImage2} alt="Slide 2" height="538px" />
            <div className="info">
              <h2 className="display-2 mb-4">
                Fresh Vegetables <br />
                Big discount
              </h2>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
        </Slider>
        {/* News Latter is Start */}
        <NewsLatter />
        {/* News Latter is End */}
      </div>
    </div>
  );
};

const NewsLatter = () => {
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

// export { HomeSlider, NewsLatter };

export default HomeSlider;
