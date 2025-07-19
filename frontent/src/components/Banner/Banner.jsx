import React from "react";
import "./Banner.css";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Banner = () => {
  return (
    <div className="BannerSection">
      <div className="container-fluid">
        <div className="row">
          {/* Banner 1 */}
          <div className="col-4">
            <div className="Box">
              <img
                src={
                  "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-1.png"
                }
                alt="Banner Image 1"
              />
              <div className="TextBox">
                <h4>Everyday Fresh & Clean with Our Products</h4>
              </div>
              <div className="ButtonBox">
                <Button>
                  Shop Now &nbsp;
                  <ArrowRightAltIcon />{" "}
                </Button>
              </div>
            </div>
          </div>

          {/* Banner 2 */}

          <div className="col-4">
            <div className="Box">
              <img
                src={
                  "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-2.png"
                }
                alt="Banner Image 2"
              />
              <div className="TextBox">
                <h4>Make your Breakfast Healthy and Easy</h4>
              </div>
              <div className="ButtonBox">
                <Button>
                  Shop Now &nbsp;
                  <ArrowRightAltIcon />
                </Button>
              </div>
            </div>
          </div>

          {/* Banner 3 */}

          <div className="col-4">
            <div className="Box">
              <img
                src={
                  "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-3.png"
                }
                alt="Banner Image 3"
              />
              <div className="TextBox">
                <h4>The best Organic Products Online</h4>
              </div>
              <div className="ButtonBox">
                <Button>
                  Shop Now &nbsp;
                  <ArrowRightAltIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
