import React, { useEffect, useState } from "react";
import "./HomeDealsOfTheDay.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Title } from "@mui/icons-material";

const HomeDealsOfTheDay = () => {
  const Data = [
    {
      Image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-5.png",
      EndTime: "2024-09-30T23:59:59",
      MainTaitle: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      RatingNumber: 4.5,
      BrandName: "NestFood",
      Price: 45,
      Oldprice: 99,
    },
    {
      Image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-6.png",
      EndTime: "2024-09-30T23:59:59",
      MainTaitle: "Perdue Simply Smart Organics Gluten Free",
      RatingNumber: 4.0,
      BrandName: "Old El Paso",
      Price: 24.85,
      Oldprice: 26.5,
    },
    {
      Image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-7.png",
      EndTime: "2024-09-30T23:59:59",
      MainTaitle: "Signature Wood-Fired Mushroom and Caramelized",
      RatingNumber: 3.0,
      BrandName: "Progresso",
      Price: 12.85,
      Oldprice: 13.8,
    },
    {
      Image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-7.png",
      EndTime: "2024-09-30T23:59:59",
      MainTaitle: "Simply Lemonade with Raspberry Juice",
      RatingNumber: 3.0,
      BrandName: "Yoplait",
      Price: 15.85,
      Oldprice: 16.8,
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    touch: true,
  };

  return (
    <div className="HomeProduct  " style={{ marginTop: "100px" }}>
      <div className="container-fluid  ">
        <div className="Header  ">
          <h2 className="hd">Deals Of The Day</h2>
          <div className="Cat">
            <ul>
              <li>
                All Deals &nbsp; <ArrowRightAltIcon />
              </li>
            </ul>
          </div>
        </div>
        <div className="container-fluid MainHomeDealsOfTheDay ">
          <div className="row d-flex justify-content-evenly">
            <Slider {...settings} className="Cat_slider_Main">
              {Data.map((item, index) => (
                <div className="col-3 item" key={index}>
                  <MainTimeCards item={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDealsOfTheDay;

const MainTimeCards = ({ item }) => {
  const {
    Image,
    EndTime,
    MainTitle,
    RatingNumber,
    BrandName,
    Price,
    OldPrice,
  } = item;

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Function to calculate the remaining time
  function calculateTimeLeft() {
    const difference = +new Date(EndTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  // Update the timeLeft every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer when the component unmounts
  }, [EndTime]);

  return (
    <div>
      <div className="ImgDive">
        <img src={Image} alt={"Image"} />
      </div>
      <div className="TimeDealtCard hover-up ">
        <div>
          <div>
            <div className="row  d-flex justify-content-evenly text-center">
              <div className="col-3 CardTime">
                <p className="Time">{timeLeft.days}</p>
                <p className="Text">Days</p>
              </div>
              <div className="col-3 CardTime ">
                <p className="Time">{timeLeft.hours}</p>
                <p className="Text">Hours</p>
              </div>
              <div className="col-3 CardTime">
                <p className="Time">{timeLeft.minutes}</p>
                <p className="Text">Mins</p>
              </div>
              <div className="col-3 CardTime ">
                <p className="Time">{timeLeft.seconds}</p>
                <p className="Text">Sec</p>
              </div>
            </div>
          </div>
          <div className="information d-flex justify-content-center ">
            <div>
              <p>{"Signature Wood-Fired Mushroom and Caramelized"}</p>
              <div>
                <Rating
                  className="Rating"
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  readOnly
                />
                <span className="ms-1  fs-6 RatingNumber">({4.5})</span>
              </div>
              <div>
                <span className="Brand fs-6 ">
                  By
                  <span className=" fs-6 text-g">{"Progresso"}</span>
                </span>
              </div>
              <div className="Rate d-flex justify-content-between">
                <div className="">
                  <span className="text-g RateAmount">12.85</span>
                  <span className="RateCut ">
                    <s>13.8</s>
                  </span>
                </div>
                <div className="">
                  <Button>
                    {" "}
                    <ShoppingCartIcon /> &nbsp; Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
