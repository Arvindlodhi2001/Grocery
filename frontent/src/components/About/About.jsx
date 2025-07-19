import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import MyImage from "../../assets/Images/ArvindImage.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestPrice from "../../assets/Images/Deal.svg";
import Deal from "../../assets/Images/Deal.svg";
import NoteIcon from "../../assets/Images/NoteIcon.svg";
import UserDivice from "../../assets/Images/UserDivice.svg";
import ReturnIcon from "../../assets/Images/ReturnIcon.svg";
import Payment from "../../assets/Images/Payment.svg";
import PerformanceImage from "../../assets/Images/about5.png";
import TeamImage1 from "../../assets/Images/about-6.png";
import TeamImage2 from "../../assets/Images/about-8.png";
// import ProgressBackground from "../../assets/Images/about10.png";
import Button from "@mui/material/Button";

const About = () => {
  const settings = {
    infinite: 1,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    touch: true,
    auto: true,
  };

  const [Glorious, setGlorious] = useState(0);
  const [HappyClients, SetHappyClients] = useState(0);
  const [ProjectComplete, SetProjectComplete] = useState(0);
  const [TeamAdvisor, SetTeamAdvisor] = useState(0);
  const [ProjectSale, SetProjectSale] = useState(0);

  const progressRef = useRef(null); // Reference to the progress section
  const [startCount, setStartCount] = useState(false); // To trigger counting logic

  // Intersection Observer to detect when "Company Progress" is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true); // Start counting
          observer.disconnect(); // Stop observing after triggering
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  // Increment logic
  useEffect(() => {
    if (startCount && Glorious < 12) {
      const incrementIntervalGlorious = setTimeout(() => {
        setGlorious((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(incrementIntervalGlorious);
    }
  }, [startCount, Glorious]);

  useEffect(() => {
    if (startCount && HappyClients < 56) {
      const incrementIntervalHappyClients = setTimeout(() => {
        SetHappyClients((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(incrementIntervalHappyClients);
    }
  }, [startCount, HappyClients]);

  useEffect(() => {
    if (startCount && ProjectComplete < 94) {
      const incrementIntervalProjectComplete = setTimeout(() => {
        SetProjectComplete((prev) => prev + 1);
      }, 18);

      return () => clearTimeout(incrementIntervalProjectComplete);
    }
  }, [startCount, ProjectComplete]);

  useEffect(() => {
    if (startCount && TeamAdvisor < 26) {
      const incrementIntervalTeamAdvisor = setTimeout(() => {
        SetTeamAdvisor((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(incrementIntervalTeamAdvisor);
    }
  }, [startCount, TeamAdvisor]);

  useEffect(() => {
    if (startCount && ProjectSale < 24) {
      const incrementIntervalProjectSale = setTimeout(() => {
        SetProjectSale((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(incrementIntervalProjectSale);
    }
  }, [startCount, ProjectSale]);

  return (
    <div>
      <div className="">
        <div className="">
          {/* About of Me */}
          <div className="container">
            <div className="row mt-5 p-3">
              <div className=" ImageContainer col-md-5">
                <img src={MyImage} alt="This is my Image" />
              </div>
              <div className=" TextContainer col-md-7">
                <div className="d-flex">
                  <h2 className="text-bold">Welcome to Nest </h2>

                  <sub className="">MART & GROCERY</sub>
                </div>
                <p className="mt-3 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate id est laborum
                </p>
                <p className="mt-3">
                  Ius ferri velit sanctus cu, sed at soleat accusata. Dictas
                  prompta et Ut placerat legendos interpre.Donec vitae sapien ut
                  libero venenatis faucibus. Nullam quis ante Etiam sit amet
                  orci eget. Quis commodo odio aenean sed adipiscing. Turpis
                  massa tincidunt dui ut ornare lectus. Auctor elit sed
                  vulputate mi sit amet. Commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate id est laborum.
                </p>

                <div className="CatSlider">
                  <Slider {...settings}>
                    <div className="item p-2">
                      <img
                        src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-1.png"
                        alt=""
                      />
                    </div>
                    <div className="item p-2">
                      <img
                        src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-2.png"
                        alt=""
                      />
                    </div>
                    <div className="item p-2">
                      <img
                        src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-3.png"
                        alt=""
                      />
                    </div>
                    <div className="item p-2">
                      <img
                        src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-4.png"
                        alt=""
                      />
                    </div>
                    <div className="item p-2">
                      <img
                        src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-5.png"
                        alt=""
                      />
                    </div>
                    <div className="item p-2">
                      <img
                        src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-6.png"
                        alt=""
                      />
                    </div>
                    <div className="item p-2">
                      <img
                        src="https://nest-frontend-v6.vercel.app/assets/imgs/page/about-2.png"
                        alt=""
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          {/* What We Provide? */}
          <div className=" Provide mt-5 container">
            <div>
              <h2>What We Provide?</h2>
            </div>
            <div className="ProvideCard">
              <div className="row">
                {/* Cart 1 */}
                <div className="cart col-md-3 text-center">
                  <div className="d-flex justify-content-around ">
                    <img src={BestPrice} alt="BestPrice" />
                  </div>
                  <div>
                    <h3 className="mt-3">Best Prices & Offers</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </p>
                  </div>
                </div>
                {/* Cart 2 */}
                <div className="cart col-md-3 text-center ">
                  <div className="d-flex justify-content-center">
                    <img src={Deal} alt="Deal" />
                  </div>
                  <div>
                    <h3 className="mt-3">Wide Assortment</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </p>
                  </div>
                </div>
                {/* Cart 3 */}
                <div className="cart col-md-3 text-center ">
                  <div className="d-flex justify-content-center">
                    <img src={NoteIcon} alt="NoteIcon" />
                  </div>
                  <div>
                    <h3 className="mt-3">Free Delivery</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </p>
                  </div>
                </div>
                {/* Cart 4 */}
                <div className="cart col-md-3 text-center">
                  <div className="d-flex justify-content-center">
                    <img src={UserDivice} alt="UserDivice" />
                  </div>
                  <div>
                    <h3 className="mt-3">Easy Returns</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </p>
                  </div>
                </div>
                {/* Cart */}
                <div className="cart col-md-3 text-center">
                  <div className="d-flex justify-content-center">
                    <img src={ReturnIcon} alt="ReturnIcon" />
                  </div>
                  <div>
                    <h3 className="mt-3">100% Satisfaction</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </p>
                  </div>
                </div>
                {/* Cart */}
                <div className="cart col-md-3 text-center">
                  <div className="d-flex justify-content-center">
                    <img src={Payment} alt="Payment" />
                  </div>
                  <div>
                    <h3 className="mt-3">Great Daily Deal</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Our performance */}
          <div className="performanceContainer container">
            <div className="row">
              <div className="col-md-6">
                <img src={PerformanceImage} alt="Performance Image" />
              </div>
              <div className="col-md-6 performanceText">
                <h5>Our performance</h5>
                <h2>Your Partner for e-commerce grocery solution</h2>
                <p>
                  Ed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                </p>
                <p>
                  Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia
                </p>
              </div>
            </div>
          </div>
          {/* Who history mission */}
          <div className="InformationBox container">
            <div className="row">
              <div className="col col-sm-12 col-md-4 col-lg-4">
                <h2>Who we are</h2>
                <p>
                  Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                  mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>
              <div className="col col-sm-12 col-md-4 col-lg-4">
                <h2>Our history</h2>
                <p>
                  Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                  mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>
              <div className="col col-sm-12 col-md-4 col-lg-4">
                <h2>Our mission</h2>
                <p>
                  Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                  mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>
            </div>
          </div>
          {/* Company Progress */}
          <div className="ProgressBarBox" ref={progressRef}>
            <div className="ProgressBar">
              <div className="row">
                <div className="col-2">
                  <h1>{Glorious}+</h1>
                  <p>Glorious years</p>
                </div>
                <div className="col-2">
                  <h1>{HappyClients}+</h1>
                  <p>Happy clients</p>
                </div>
                <div className="col-2">
                  <h1>{ProjectComplete}+</h1>
                  <p>Project complete</p>
                </div>
                <div className="col-2">
                  <h1>{TeamAdvisor}+</h1>
                  <p>Team advisor</p>
                </div>
                <div className="col-2">
                  <h1>{ProjectSale}+</h1>
                  <p>Project Sale</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Our Team */}
          <div className=" CompanyOurTeam  container mt-5 mb-5">
            <div className="text-center ">
              <h1>
                <u>Our Team</u>
              </h1>
            </div>
            <div className="row">
              <div className="col col-md-4 TeamColumb">
                <h5>Our Team</h5>
                <h2>Meet Our Expert Team</h2>
                <p>
                  Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
                  massa dolor imperdiet neccon sequata congue idsem. Maecenas
                  malesuada faucibus finibus.
                </p>
                <p>
                  Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
                  massa dolor imperdiet neccon sequata congue idsem. Maecenas
                  malesuada faucibus finibus.
                </p>
                <div>
                  <Button>View All Members</Button>
                </div>
              </div>
              <div className="col col-md-4 imageBox">
                <img src={TeamImage1} alt="TeamImage1" />
              </div>
              <div className="col col-md-4 imageBox">
                <img src={TeamImage2} alt="TeamImage2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
