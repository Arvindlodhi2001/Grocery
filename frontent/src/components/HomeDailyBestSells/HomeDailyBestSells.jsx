import React, { useState } from "react";

import "./HomeDailyBestSells.css";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "@mui/material/Rating";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SSlider from "@mui/material/Slider";

const SliderProduct = (props) => {
  return (
    <div>
      <div className="ProductThumbSLider row">
        {props.tag !== null && props.tag !== undefined && (
          <span className={`Badge ${props.tag} text-center`}>{props.tag}</span>
        )}
        <div className="ImageWrapper">
          <img
            src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-8-2.jpg"
            alt=""
            className="w-100"
          />
          <div className="overLay transition">
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <a
                  href=""
                  style={{
                    borderRight: "1px solid #BCE3C9",
                  }}
                  tooltip="Add to Wishlist"
                >
                  <FavoriteBorderOutlinedIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href=""
                  style={{
                    borderRight: "1px solid #BCE3C9",
                  }}
                  tooltip="Compare"
                >
                  <CompareArrowsIcon />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" tooltip="Quick View">
                  <VisibilityIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Info">
          <span className="d-block CategoryName">Snack</span>
          <h4 className="Title">Encore Seafoods Stuffed Alaskan Salmon</h4>
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
          <div className="d-flex align-items-center">
            <span className="Price text-g">$28.85</span>
            <span className="OldPrice">
              <s>$75.85</s>
            </span>
          </div>
          <div className="Range mt-2 mb-2">
            <input
              type="range"
              className="text-g"
              disabled
              min="0"
              max="100"
              name=""
              id=""
            />
            <p>Sold: 90/120</p>
          </div>
          <div className="d-flex align-items-center mt-3 mb-3 ">
            <Button className="transition">
              <ShoppingCartIcon /> &nbsp; Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeDailyBestSells = () => {
  const [MinMaxSize, setMinMaxSize] = useState(4);

  const ZoomMinMaxSize = (size) => {
    setMinMaxSize(size);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: MinMaxSize,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    touch: true,
    auto: true,
  };

  return (
    <div>
      <div className="HomeProduct">
        <div className="container-fluid">
          <div className="Header">
            <h2 className="hd">Daily Best Sells</h2>
            <div className="Cat">
              <ul>
                <li>Featured</li>
                <li>Popular</li>
                <li>New Added</li>
                <li onClick={() => ZoomMinMaxSize(3)}>
                  <GridViewIcon />
                </li>
                <li onClick={() => ZoomMinMaxSize(4)}>
                  <ViewCompactIcon />
                </li>
              </ul>
            </div>
          </div>
          <div className="row HomeDailyBestSells">
            <div className="col-md-3 BannerRow">
              <h2 className="text">Bring nature into your home</h2>
              <Button className="bg-success text-white">
                Shop Now &nbsp; <ArrowRightAltIcon />
              </Button>
              <img
                src={
                  "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-4.png"
                }
                alt="Banner Image"
              />
            </div>
            <div className="col-md-9 ProductRow">
              <div className="container-fluid  ">
                <Slider
                  {...settings}
                  className="Cat_slider_Main ms-3 me-4 d-flex justify-content-around"
                >
                  <div className="item " style={{ width: MinMaxSize }}>
                    <SliderProduct tag={"new"} />
                  </div>
                  <div className="item " style={{ width: MinMaxSize }}>
                    <SliderProduct tag={"best"} />
                  </div>
                  <div className="item  " style={{ width: MinMaxSize }}>
                    <SliderProduct tag={"hot"} />
                  </div>
                  <div className="item  " style={{ width: MinMaxSize }}>
                    <SliderProduct tag={"sale"} />
                  </div>
                  <div className="item " style={{ width: MinMaxSize }}>
                    <SliderProduct tag={"Save 20%Off "} />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDailyBestSells;
