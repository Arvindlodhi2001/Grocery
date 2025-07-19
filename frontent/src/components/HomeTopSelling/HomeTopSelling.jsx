import React, { useState } from "react";
import "./HomeTopSelling.css";
import Rating from "@mui/material/Rating";
import { Margin } from "@mui/icons-material";

const HomeTopSelling = () => {
  const [TopSellingProducts, setTopSellingProducts] = useState([
    {
      title: "Nestle Original Coffee-Mate Coffee Creamer",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-1.jpg",
      rating: 4.5,
      newPrice: 28.85,
      oldPrice: 75.85,
    },
    {
      title: "Nestle Original Coffee-Mate Coffee Creamer",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-2.jpg",
      rating: 4.0,
      newPrice: 22.85,
      oldPrice: 60.85,
    },
    {
      title: "Nestle Original Coffee-Mate Coffee Creamer",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-3.jpg",
      rating: 4.0,
      newPrice: 22.85,
      oldPrice: 60.85,
    },
  ]);

  const [TradingProduct, setTradingProduct] = useState([
    {
      title: "Organic Cage-Free Grade A Large Brown Eggs",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-4.jpg",
      rating: 4.5,
      newPrice: 28.85,
      oldPrice: 75.85,
    },
    {
      title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-5.jpg",
      rating: 4.0,
      newPrice: 22.85,
      oldPrice: 60.85,
    },
    {
      title: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-6.jpg",
      rating: 4.0,
      newPrice: 22.85,
      oldPrice: 60.85,
    },
  ]);

  const [RecentlyAdded, setRecentlyAdded] = useState([
    {
      title: "Pepperidge Farm Farmhouse Hearty White Bread",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-7.jpg",
      rating: 4.5,
      newPrice: 28.85,
      oldPrice: 75.85,
    },
    {
      title: "Organic Frozen Triple Berry Blend",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-8.jpg",
      rating: 4.0,
      newPrice: 22.85,
      oldPrice: 60.85,
    },
    {
      title: "Oroweat Country Buttermilk Bread",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-9.jpg",
      rating: 4.0,
      newPrice: 22.85,
      oldPrice: 60.85,
    },
  ]);

  const [TopRated, setTopRated] = useState([
    {
      title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-10.jpg",
      rating: 4.5,
      newPrice: 28.85,
      oldPrice: 75.85,
    },
    {
      title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-11.jpg",
      rating: 4.0,
      newPrice: 22.85,
      oldPrice: 60.85,
    },
    {
      title: "All Natural Italian-Style Chicken Meatballs",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-12.jpg",
      rating: 4.0,
      newPrice: 22.85,
      oldPrice: 60.85,
    },
  ]);

  return (
    <div className="HomeTopSelling">
      <div className="container-fluid ">
        <div className="row MainRow ">
          <div className=" col col-md-3">
            <div>
              <div className="HeaderMainTag">
                <div>
                  <h3>Top Selling</h3>
                  <div className="ShortLine"></div>
                  <hr />
                </div>
                <div className="TopProduct">
                  <ul>
                    {TopSellingProducts?.map((product, index) => (
                      <li className="ProductMiniCard" key={index}>
                        <ProductCard product={product} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" col col-md-3">
            <div>
              <div className="HeaderMainTag">
                <div>
                  <h3>Trending Products</h3>
                  <div className="ShortLine"></div>
                  <hr />
                </div>
                <div className="TopProduct">
                  <ul>
                    {TradingProduct?.map((product, index) => (
                      <li className="ProductMiniCard " key={index}>
                        <ProductCard product={product} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className=" col col-md-3">
            <div>
              <div className="HeaderMainTag">
                <div>
                  <h3>Recently added</h3>
                  <div className="ShortLine"></div>
                  <hr />
                </div>
                <div className="TopProduct">
                  <ul>
                    {RecentlyAdded?.map((product, index) => (
                      <li className="ProductMiniCard" key={index}>
                        <ProductCard product={product} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className=" col col-md-3">
            <div>
              <div className="HeaderMainTag">
                <div>
                  <h3>Top Rated</h3>
                  <div className="ShortLine"></div>
                  <hr />
                </div>
                <div className="TopProduct">
                  <ul>
                    {TopRated?.map((product, index) => (
                      <li className="ProductMiniCard" key={index}>
                        <ProductCard product={product} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopSelling;

const ProductCard = ({ product }) => {
  return (
    <div className="row CardRow">
      <div className="col-3 ProductCol">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="col-9 ProductColText">
        <p>{product.title}</p>
        <Rating
          className="Rating"
          name="half-rating-read"
          defaultValue={product.rating}
          precision={0.5}
          readOnly
        />
        <div className="d-flex align-items-center PriceBox">
          <span className="NewPrice text-g">${product.newPrice}</span>{" "}
          <span className="OldPrice">
            <s>${product.oldPrice}</s>
          </span>
        </div>
      </div>
    </div>
  );
};
