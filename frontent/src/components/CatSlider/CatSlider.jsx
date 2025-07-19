import React from "react";
import "./CatSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { colors } from "@mui/material";

const CatSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    touch: true,
  };

  const Data = [
    {
      id: 1,
      name: "Cake & Milk",
      quantity: 25,
      colors: "#F2FCE4",
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-13.png",
    },
    {
      id: 2,
      name: "Organic Kiwi",
      quantity: 45,
      colors: "#FFFCEB",
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-12.png",
    },
    {
      id: 3,
      name: "Peach",
      quantity: 25,
      colors: "#ECFFEC",
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png",
    },
    {
      id: 4,
      name: "Red Apple",
      quantity: 25,
      colors: " #FEEFEA",
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-10.png",
    },
    {
      id: 5,
      name: "Snack",
      quantity: 25,
      colors: "#FFF3EB",
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-9.png",
    },
    {
      id: 6,
      name: "Cake & Milk",
      quantity: 25,
      colors: "#FFF3FF",
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-8.png",
    },
    {
      id: 7,
      name: "Cake & Milk",
      quantity: 25,
      colors: "#F2FCE4",
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-7.png",
    },
    {
      id: 8,
      name: "Cake & Milk",
      quantity: 25,
      colors: "#FEEFEA",
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-6.png",
    },
    {
      id: 9,
      name: "Cake & Milk",
      quantity: 25,
      colors: "#FEEFEA",
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-5.png",
    },
    {
      id: 10,
      name: "Cake & Milk",
      quantity: 25,
      colors: "#FEEFEA",
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-4.png",
    },
    {
      id: 11,
      name: "Cake & Milk",
      quantity: 25,
      colors: "#FEEFEA",
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png",
    },
    {
      id: 12,
      name: "Cake & Milk",
      quantity: 25,
      colors: "#FEEFEA",
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-2.png",
    },
    {
      id: 13,
      name: "Cake & Milk",
      quantity: 25,
      colors: "#FEEFEA",
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-1.png",
    },
    {
      id: 14,
      name: "Cake & Milk",
      quantity: 25,
      colors: "#FEEFEA",
      image: "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-13.png",
    },
  ];
  return (
    <div className="CatSliderSection">
      <div className="d-flex justify-content-between">
        <h2 className="hd">Featured Categories</h2>
        <div className="NamePlateItems">
          <ul>
            <li>Cake & Milk</li>
            <li>Coffee & Teas</li>
            <li>Pet Foods</li>
            <li>Vegetables</li>
          </ul>
        </div>
      </div>
      <div className="container-fluid">
        <Slider {...settings} className="Cat_slider_Main">
          {Data.map((Element, index) => (
            <div className="item" key={index}>
              <div className="info" style={{ backgroundColor: Element.colors }}>
                <img src={Element.image} alt={Element.name} />
                <h5>{Element.name}</h5>
                <p>{Element.quantity} items</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CatSlider;
