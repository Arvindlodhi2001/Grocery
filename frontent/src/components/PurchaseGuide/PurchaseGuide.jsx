import React from "react";
import "./PurchaseGuide.css";
import Banner1 from "../../assets/Images/guide-1.png";
import category1 from "../../assets/Images/category1.svg";
import banner11 from "../../assets/Images/banner-11.png";
import thumbnail1 from "../../assets/Images/thumbnail-3.jpg";
import { Link } from "react-router-dom";
import CottageIcon from "@mui/icons-material/Cottage";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const PurchaseGuide = () => {
  return (
    <div>
      <div className="PurchaseGuide mb-5">
        <div className="container-fluid">
          <div className="listingPage">
            <div className="breadcrumb flex-column">
              <h1>Snack</h1>
              <ul className="list list-inline">
                <li className="list-inline-item mb-0">
                  <Link to={""}>
                    <CottageIcon className="mb-2" /> Home <ChevronRightIcon />{" "}
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={""}>
                    Pages <ChevronRightIcon />{" "}
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to={""}>Purchase Guide</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            {/* Account Registering */}
            <div className="">
              <div className="row">
                <div className="col col-sm-12 col-md-8 col-lg-8">
                  {/* Purchase Guide Box */}

                  <div className="PurchaseGuideBox">
                    <h1>Purchase Guide</h1>
                    <div>
                      <ul className="">
                        <li className="ms-0">By Jonh</li>
                        <li>9 April 2020</li>
                        <li>8 mins read</li>
                        <li>29k Views</li>
                      </ul>
                    </div>
                    <div className="Image">
                      <img src={Banner1} alt="Banner1" />
                    </div>
                  </div>
                  {/* First Part */}
                  <div className="ListContentPart">
                    {" "}
                    <h1>1. Account Registering</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla modi dolores neque omnis ipsa? Quia, nam voluptas!
                      Aut, magnam molestias:
                    </p>
                    <div>
                      <ul>
                        <li>Name (required)</li>
                        <li>Age (required)</li>
                        <li>Date of birth (required)</li>
                        <li>Passport/ ID no. (required)</li>
                        <li>Current career (required)</li>
                        <li>Mobile phone numbers (required)</li>
                        <li>Email address (required)</li>
                        <li>Hobbies & interests (optional)</li>
                        <li>Social profiles (optional)</li>
                      </ul>
                    </div>
                  </div>
                  {/* Second Part */}
                  <div className="ListContentPart">
                    <h1>2. Select Product</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit officia necessitatibus repellat placeat aut enim
                      recusandae assumenda adipisci quisquam, deserunt iure
                      veritatis cupiditate modi aspernatur accusantium, mollitia
                      doloribus. Velit, iste.
                    </p>
                  </div>
                  {/* Third Part */}
                  <div className="ListContentPart">
                    <h1>3. Confirm Order Content</h1>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Libero ut autem sed! Assumenda, nostrum non doloribus
                      tenetur, pariatur veritatis harum natus ipsam maiores
                      dolorem repudiandae laboriosam, cupiditate odio earum eum?
                    </p>
                  </div>
                  {/* Fourth Part */}
                  <div className="ListContentPart">
                    <h1>4.Transaction Completed</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam nesciunt nam aut magnam libero aspernatur eaque
                      praesentium? Tempore labore quis neque? Magni.
                    </p>
                  </div>
                  {/* Fifth Part  */}
                  <div className="ListContentPart">
                    {" "}
                    <h1>5. Accepted Credit Cards</h1>
                    <div>
                      <ul>
                        <li>Visa</li>
                        <li>Mastercards</li>
                        <li>American Express</li>
                        <li>Discover</li>
                        <li>
                          *Taxes are calculated by your local bank and location.
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Fifth Part  */}
                  <div className="ListContentPart">
                    {" "}
                    <h1>6. Download and Setup</h1>
                    <div>
                      <ul>
                        <li>Updated content on a regular basis</li>
                        <li>Secure & hassle-free payment</li>
                        <li>1-click checkout</li>
                        <li>Easy access & smart user dashboard</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col col-sm-12 col-md-4 col-lg-4">
                  <div className=" PurchaseGuideBox ps-5">
                    <InputComponent />
                    <div className=" mt-5">
                      <div className="CategoryBox">
                        <h1>
                          <u>Category</u>
                        </h1>
                        <div>
                          <CategoryComponent />
                          <CategoryComponent />
                          <CategoryComponent />
                          <CategoryComponent />
                          <CategoryComponent />
                          <CategoryComponent />
                          <CategoryComponent />
                          <CategoryComponent />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="TrendingNowBox">
                      <h1>Trending Now</h1>
                      <TrendingNow />
                      <TrendingNow />
                      <TrendingNow />
                      <TrendingNow />
                      <TrendingNow />
                      <TrendingNow />
                      <TrendingNow />
                      <TrendingNow />
                      <TrendingNow />
                      <TrendingNow />
                      <TrendingNow />
                      <TrendingNow />
                    </div>
                  </div>
                  <div className="mt-5 LastBannerImage">
                    <img src={banner11} alt="banner11" />
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

export default PurchaseGuide;

// Input Component
export const InputComponent = () => {
  return (
    <div className="InputBox">
      <div className="SearchBox">
        <input type="text" placeholder="Search..." name="" id="" />
        <SearchIcon className="SearchIcon" />
      </div>
    </div>
  );
};

// Category Component
export const CategoryComponent = () => {
  return (
    <div>
      <div className="ListBox ">
        <div className="List ">
          <div>
            <img src={category1} alt="category1" />
          </div>
          <div>
            <p>Milks & Dairies</p>
          </div>
          <div>
            <p className="Bage">30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Trending Now

export const TrendingNow = () => {
  return (
    <div>
      <div className="ListTrendingBox">
        <div className="ImagePart">
          <img className="thumbnail" src={thumbnail1} alt="thumbnail1" />
        </div>
        <div className="thumbnailContent">
          <h4>Chen Cardigan</h4>
          <p>$99.50</p>
          <div className="Start">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
