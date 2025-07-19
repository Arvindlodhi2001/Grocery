import React from "react";
import "./Footer.css";
import Icon1 from "../../assets/Images/icon1.svg";
import Icon2 from "../../assets/Images/icon2.svg";
import Icon3 from "../../assets/Images/icon3.svg";
import Icon4 from "../../assets/Images/icon4.svg";
import Icon5 from "../../assets/Images/icon5.svg";
import Logo from "../../assets/Images/logo.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SendIcon from "@mui/icons-material/Send";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AppStore from "../../assets/Images/AppStore.jpg";
import GooglePlay from "../../assets/Images/GooglePlay.jpg";
import PaymentMethod from "../../assets/Images/PaymentMethod.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeBottomeBaner from "../HomeBottomeBaner/HomeBottomeBaner";

const Footer = () => {
  return (
    <div>
      <HomeBottomeBaner />
      <div className="footerWrapper">
        <div className="footerBoxes">
          <div className="container-fluid">
            <div className="row ">
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon1} alt="Icon1" />
                  </span>
                  <div className="info">
                    <h4>Best prices & offers</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon2} alt="Icon2" />
                  </span>
                  <div className="info">
                    <h4>Free delivery</h4>
                    <p>24/7 amazing services</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon3} alt="Icon3" />
                  </span>
                  <div className="info">
                    <h4>Great daily deal</h4>
                    <p>When you sign up</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon4} alt="Icon4" />
                  </span>
                  <div className="info">
                    <h4>Wide assortment</h4>
                    <p>Mega Discounts</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon5} alt="Icon5" />
                  </span>
                  <div className="info">
                    <h4>Easy returns</h4>
                    <p>Within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                {" "}
                <a href="">
                  {" "}
                  <img src={Logo} alt="" />{" "}
                </a>{" "}
                <p>Awesome grocery store website template</p>
                <p>
                  <span className="text-g">
                    <LocationOnIcon />
                  </span>
                  <span className="tageName">Address:</span> Shop - D328 K.V
                  School near Ashima mall
                </p>
                <p>
                  <span className="text-g">
                    <HeadsetMicIcon />
                  </span>
                  <span className="tageName">Call Us:</span>(+91) -
                  540-025-124553
                </p>
                <p>
                  <span className="text-g">
                    <SendIcon />
                  </span>
                  <span className="tageName">Email:</span>
                  arvindlodhi850@gmail.com
                </p>
                <p>
                  <span className="text-g">
                    <AccessTimeIcon />
                  </span>
                  <span className="tageName">Hours:</span>10:00 - 18:00, Mon -
                  Sat
                </p>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-3">
                    <div>
                      <div className="">
                        <h4>Company</h4>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <a href=""> About Us </a>
                          </li>
                          <li>
                            <a href=""> Delivery Information </a>
                          </li>
                          <li>
                            <a href=""> Privacy Policy</a>
                          </li>
                          <li>
                            <a href="">Terms & Conditions</a>
                          </li>
                          <li>
                            <a href="">Sour Cream and Dips</a>
                          </li>
                          <li>
                            <a href="">Tea & Kombucha</a>
                          </li>
                          <li>
                            <a href="">Contact Us</a>
                          </li>
                          <li>
                            <a href="">Support Center</a>
                          </li>
                          <li>
                            <a href=""> Careers</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div>
                      <div className="">
                        <h4>Account</h4>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <a href=""> Sign In </a>
                          </li>
                          <li>
                            <a href=""> View Cart </a>
                          </li>
                          <li>
                            <a href=""> My Wishlist</a>
                          </li>
                          <li>
                            <a href="">Track My Order</a>
                          </li>
                          <li>
                            <a href="">Help Ticket</a>
                          </li>
                          <li>
                            <a href="">Shipping Details</a>
                          </li>
                          <li>
                            <a href="">Compare products</a>
                          </li>
                          <li>
                            <a href="">Support Center</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div>
                      <div className="">
                        <h4>Corporate</h4>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <a href=""> Become a Vendor </a>
                          </li>
                          <li>
                            <a href=""> Affiliate Program</a>
                          </li>
                          <li>
                            <a href=""> Farm Business</a>
                          </li>
                          <li>
                            <a href="">Farm Careers</a>
                          </li>
                          <li>
                            <a href="">Our Suppliers</a>
                          </li>
                          <li>
                            <a href="">Accessibility</a>
                          </li>
                          <li>
                            <a href="">Promotions</a>
                          </li>
                          <li>
                            <a href="">Support Center</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div>
                      <div>
                        <h4>Popular</h4>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <a href="">Milk & Flavoured Milk</a>
                          </li>
                          <li>
                            <a href="">Butter and Margarine</a>
                          </li>
                          <li>
                            <a href="">Eggs Substitutes</a>
                          </li>
                          <li>
                            <a href="">Marmalades</a>
                          </li>
                          <li>
                            <a href="">Sour Cream and Dips</a>
                          </li>
                          <li>
                            <a href="">Tea & Kombucha</a>
                          </li>
                          <li>
                            <a href="">Cheese</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  <div>
                    <h4>Install App</h4>
                  </div>
                  <div>
                    <p>From App Store or Google Play</p>
                    <div className="d-flex">
                      <div className="p-2">
                        <img src={AppStore} alt="" />
                      </div>
                      <div className="p-2">
                        <img src={GooglePlay} alt="" />
                      </div>
                    </div>
                    <p className="mt-3">Secured Payment Gateways</p>
                    <div>
                      <div>
                        <img src={PaymentMethod} alt="" />
                      </div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Border */}
            <div className=" BottomFooter ">
              <div className="mt-5">
                <p>
                  © 2024,{" "}
                  <a href="" className="text-g">
                    Nest
                  </a>{" "}
                  - HTML Ecommerce Template
                </p>
                <p>All rights reserved</p>
              </div>
              <div className="ContactNumber">
                <div className=" MainContainer d-flex ">
                  <div className=" ChildContainer  d-flex  ">
                    <div className="SubChildContainer1">
                      <HeadsetMicIcon className="IconsMobile fs-5 custom-icon" />
                    </div>
                    <div className="SubChildContainer2 text-center">
                      <h4 className="text-g">+91-9827805086</h4>
                      <p>Working 8:00 - 22:00</p>
                    </div>
                  </div>
                  <div className=" ChildContainer d-flex ">
                    <div className="SubChildContainer1">
                      <HeadsetMicIcon className="IconsMobile fs-5 custom-icon" />
                    </div>
                    <div className="SubChildContainer2 text-center">
                      <h4 className="text-g">+91-9827805086</h4>
                      <p>Working 8:00 - 22:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 mb-4">
                <div className="d-flex justify-content-between ">
                  <span className="fw-bold text-black">Follow Us</span>
                  <span className="">
                    <FacebookIcon />
                  </span>
                  <span>
                    <TwitterIcon />
                  </span>
                  <span>
                    <InstagramIcon />
                  </span>
                  <span>
                    <LinkedInIcon />
                  </span>
                  <span>
                    <YouTubeIcon />
                  </span>
                </div>
                <p>Up to 15% discount on your first subscribe</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
