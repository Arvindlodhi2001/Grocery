import React from "react";
import "./Home.css";
import HomeSlider from "./HomeSlider/HomeSlider";
import CatSlider from "../CatSlider/CatSlider";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";
import HomeTopSelling from "../HomeTopSelling/HomeTopSelling";
import HomeDealsOfTheDay from "../HomeDealsOfTheDay/HomeDealsOfTheDay";
import HomeDailyBestSells from "../HomeDailyBestSells/HomeDailyBestSells";
import HomeBottomeBaner from "../HomeBottomeBaner/HomeBottomeBaner";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <CatSlider />
      <Banner />
      <Product />
      <HomeDailyBestSells />
      <HomeDealsOfTheDay />
      <HomeTopSelling />
    </div>
  );
};

export default Home;
