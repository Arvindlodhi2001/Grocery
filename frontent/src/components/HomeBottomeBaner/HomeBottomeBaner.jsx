import React from "react";
import "./HomeBottomeBaner.css";
import Banner from "./../../assets/Images/banner-9.png";
import "../Home/HomeSlider/HomeSlider.css";
import HomeNewsLetter from "../HomeNewsLetter/HomeNewsLetter";

const HomeBottomeBaner = () => {
  return (
    <section>
      <div className=" newsLetterSection  ">
        <div className="container-fluid">
          <div className="box d-flex align-items-center ">
            <div className="info">
              <h2>
                Stay home & get your daily <br /> needs from our shop
              </h2>
              <p>
                Start You'r Daily Shopping with{" "}
                <a href="" className="text-g">
                  Nest Mart
                </a>
              </p>
              <HomeNewsLetter />
            </div>
            <div className="img">
              <img src={Banner} className="w-100" alt="Bottom Banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBottomeBaner;
