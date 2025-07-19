import React, { useState } from "react";
import "./SideBar.css";
import category1 from "../../assets/Images/category1.svg";
import { Link } from "react-router-dom";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import fillterWidgetBg from "../../assets/Images/fillterWidgetBg.png";
// Function to format the value for the slider label
function valuetext(value) {
  return `₹${value}`;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SideBar = ({ onFilterApply }) => {
  // State to handle slider values (price range)
  const [value, setValue] = useState([450, 20000]);

  // Event handler for the slider change

  const [filter, setFilter] = useState({
    price: [],
    color: [],
    condition: [],
  });

  // Update filter state for the price slider
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    setFilter({ ...filter, price: newValue });
  };

  // Handle checkbox changes for colors and conditions
  const handleCheckboxChange = (type, value) => {
    setFilter((prevState) => ({
      ...prevState,
      [type]: prevState[type].includes(value)
        ? prevState[type].filter((item) => item !== value)
        : [...prevState[type], value],
    }));
  };

  // Apply filters when button is clicked
  const handleFilterApply = () => {
    if (onFilterApply) {
      onFilterApply(filter);

      console.log("filter --->>>>", filter);
    }
  };

  return (
    <div className="sidebar">
      {/* Category Items */}
      <div className="card border-0 shadow">
        <h3>Category</h3>
        <div className="catList">
          {/* Item Start */}
          <div className="catItem d-flex align-items-center">
            <span className="ImgContainer">
              <img src={category1} style={{ width: "30px" }} alt="category1" />
            </span>
            <p className="Text mb-0 ms-3 me-3">
              <Link className="LinkTag">Milks & Dairies</Link>
            </p>
            <span className="quantity d-flex justify-content-center align-items-center rounded-circle bg-g ms-auto">
              30
            </span>
          </div>
          {/* Repeat items as necessary */}
        </div>
      </div>

      {/* Price Filter */}
      <div className="card border-0 shadow mt-5">
        <h3>Filter by price</h3>
        <div>
          {" "}
          <div className="RatingRange">
            <Slider
              className="Rating"
              getAriaLabel={() => "Price range"}
              value={value}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={0}
              max={2000}
              color="success"
            />

            <div className="RatingInformation d-flex justify-content-between">
              <p>
                From : <strong className=" text-g">₹ {value[0]}</strong>
              </p>
              <p>
                To : <strong className=" text-g">₹ {value[1]}</strong>
              </p>
            </div>
            {/* Colors filters Start */}
            <div className="Colorsfilters">
              <h5>Colors</h5>
              <ul>
                {["Red", "Blue", "Green"].map((color) => (
                  <li key={color}>
                    <Checkbox
                      {...label}
                      color="success"
                      checked={filter.color.includes(color)}
                      onChange={() => handleCheckboxChange("color", color)}
                    />
                    {color}
                  </li>
                ))}
              </ul>
            </div>
            {/* Colors filters End */}
            {/* Item Condition Start */}
            <div className="Colorsfilters">
              <h5>Item Condition</h5>
              <ul>
                {["New", "Refurbished", "Used"].map((condition) => (
                  <li key={condition}>
                    <Checkbox
                      {...label}
                      color="success"
                      checked={filter.condition.includes(condition)}
                      onChange={() =>
                        handleCheckboxChange("condition", condition)
                      }
                    />
                    {condition}
                  </li>
                ))}
              </ul>
            </div>
            {/* Colors filters End */}
            {/* Button */}
            <div>
              <Button onClick={handleFilterApply}>
                {" "}
                <FilterAltIcon /> Fillter
              </Button>
            </div>
            <div>
              <img className="ImgBanner" src={fillterWidgetBg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
