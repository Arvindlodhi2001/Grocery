import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./DetailsProduct.css";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
// import InnerImageZoom from "react-inner-image-zoom";
// import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import axios from "axios";

const DetailsProduct = () => {
  const [Products, setProducts] = useState(null); // Initialize with null to check for loading state
  const [selectedSize, setSelectedSize] = useState(null);
  const [Quentity, setQuentity] = useState(1);
  const [ProductInfoDIsplay, setProductInfoDIsplay] = useState("Description");
  const [ImageURL, setImageURL] = useState(
    "https://5.imimg.com/data5/SELLER/Default/2022/9/XR/TQ/KY/38630640/casual-shoes.jpg"
  );

  const ProductsFetchData = async () => {
    try {
      const responseData = await axios.get(
        `http://localhost:3001/Products/5151`
      );
      setProducts(responseData.data); // Set the fetched product data
      console.log("Product Data Fetch Successfully...", responseData.data);
    } catch (error) {
      console.log("Error -- ", error);
    }
  };

  useEffect(() => {
    ProductsFetchData();
  }, []);

  // Check if the product data is still being loaded
  if (!Products) {
    return <div>Loading...</div>;
  }

  // If Products is defined, render the component
  return (
    <div className="DetailPage">
      <div className="breadcrumbWrapper">
        <div className="container-fluid">
          <div className="breadcrumb breadcrumb2 flex-column">
            <ul className="list list-inline">
              <li className="list-inline-item mb-0">
                <Link className="link" to={"/"}>
                  Home
                </Link>{" "}
                &nbsp; /
              </li>
              <li className="list-inline-item">
                <Link className="link" to={""}>
                  Vegetables & Tubers
                </Link>{" "}
                &nbsp; /
              </li>
              <li className="list-inline-item">Seeds of Change Organic</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {/* Product Left Part Start */}
          <div className="col-md-9 part1">
            <div className="row">
              {/* Product Zoom Start */}
              <div className="col-md-5 productZoom">
                <div className="Image1">
                  {/* <InnerImageZoom
                    className="InnerImageZoom border"
                    src={ImageURL}
                  /> */}
                </div>
                <div className="Images2">
                  <div className="SmallImage">
                    <img
                      src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
                      alt=""
                      onClick={(e) => setImageURL(e.target.src)}
                    />
                  </div>
                  <div className="SmallImage">
                    <img
                      src="https://m.media-amazon.com/images/I/614aiM56siL._SL1500_.jpg"
                      alt=""
                      onClick={(e) => setImageURL(e.target.src)}
                    />
                  </div>
                  <div className="SmallImage">
                    <img
                      src="https://assets.ajio.com/medias/sys_master/root/20230804/163c/64cc0468a9b42d15c98a1af5/-473Wx593H-466417359-white-MODEL.jpg"
                      alt=""
                      onClick={(e) => setImageURL(e.target.src)}
                    />
                  </div>
                  <div className="SmallImage">
                    <img
                      src="https://www.shutterstock.com/shutterstock/photos/92008067/display_1500/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg"
                      alt=""
                      onClick={(e) => setImageURL(e.target.src)}
                    />
                  </div>
                </div>
              </div>
              {/* Product Zoom End */}

              {/* Product Information Start */}
              <div className="col-md-7 productInfo">
                <p className="btn btn-danger">Sale Off</p>
                <h2>{Products.title}</h2>
                <div className="mt-3 d-flex align-items-center">
                  {" "}
                  <Rating
                    name="half-rating-read"
                    defaultValue={Products.rating}
                    precision={0.5}
                    readOnly
                  />{" "}
                  <span className="">(32 reviews)</span>
                </div>
                <div className="price d-flex align-items-center">
                  <h4 className="NewPrice">${Products.price}</h4>
                  <div className="ms-4 lh-sm m-0 p-0">
                    <p className=" text-org m-0 p-0">26% Off</p>
                    <p className=" OldPrice">
                      <del>${Products.oldPrice}</del>
                    </p>
                  </div>
                </div>
                <p className=" Paragraph  text-dark">
                  {Products.ShortDescribe}
                </p>
                <div className=" Size  d-flex align-items-center">
                  <p className="weight me-5">Size / Weight:</p>
                  {Products.SizeWeight.map((size) => (
                    <p
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`btn ${
                        size === selectedSize ? "btn-success" : "btn-light"
                      }`}
                    >
                      {size}
                    </p>
                  ))}
                </div>
                <div className="IpBtnFit d-flex">
                  <input
                    type="number"
                    className="form-control"
                    min={1}
                    value={Quentity}
                    name=""
                    id=""
                    onChange={(e) => setQuentity(e.target.value)}
                  />
                  <Button
                    className="  text-light"
                    style={{ backgroundColor: "#3bb77e" }}
                  >
                    <ShoppingCartIcon /> &nbsp; Add to Cart
                  </Button>
                  <Button className="  border">
                    <FavoriteBorderIcon />
                  </Button>
                  <Button className=" border">
                    <CompareArrowsIcon />
                  </Button>
                </div>
                <div className="d-flex OtherInfo mt-5">
                  <div>
                    <p>
                      Type: <span>{Products.TypeOf}</span>
                    </p>
                    <p>
                      MFG: <span>{Products.MFG}</span>
                    </p>
                    <p>
                      LIFE: <span>{Products.Life}</span>
                    </p>
                  </div>
                  <div className="ms-5">
                    <p>
                      SKU: <span>{Products.SKU}</span>
                    </p>
                    <p>
                      Tags: <span>{Products.Tags.join(", ")}</span>
                    </p>
                    <p>
                      Stock: <span>{Products.Stock}</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Product Information End */}
            </div>
            {/* Product Bottom Info Part Start */}
            <div className="ProductBottomInfo">
              <header>
                <Button
                  value={"Description"}
                  onClick={(e) => setProductInfoDIsplay(e.target.value)}
                >
                  Description
                </Button>{" "}
                <Button
                  value={"Additional info"}
                  onClick={(e) => setProductInfoDIsplay(e.target.value)}
                >
                  Additional info
                </Button>
                <Button
                  value={"Vendor"}
                  onClick={(e) => setProductInfoDIsplay(e.target.value)}
                >
                  Vendor
                </Button>{" "}
                <Button
                  value={"Reviews"}
                  onClick={(e) => setProductInfoDIsplay(e.target.value)}
                >
                  Reviews
                </Button>
              </header>
              <div className="p-4 border">
                {ProductInfoDIsplay === "Description" && (
                  <div>
                    <p>
                      Uninhibited carnally hired played in whimpered dear
                      gorilla koala depending and much yikes off far quetzal
                      goodness and from for grimaced goodness unaccountably and
                      meadowlark near unblushingly crucial scallop tightly
                      neurotic hungrily some and dear furiously this apart.
                    </p>
                    <p>
                      Spluttered narrowly yikes left moth in yikes bowed this
                      that grizzly much hello on spoon-fed that alas rethought
                      much decently richly and wow against the frequent fluidly
                      at formidable acceptably flapped besides and much circa
                      far over the bucolically hey precarious goldfinch mastodon
                      goodness gnashed a jellyfish and one however because.
                    </p>

                    <div>
                      <div className="row">
                        <span className="col-md-4 HeadPartS">
                          Type Of Packing
                        </span>
                        <span className="col-md-4 ResponsePart">Bottle</span>
                      </div>
                      <div className="row">
                        <span className="col-md-4 HeadPartS">Color</span>
                        <span className="col-md-4 ResponsePart">
                          Green, Pink, Powder Blue, Purple
                        </span>
                      </div>
                      <div className="row">
                        <span className="col-md-4 HeadPartS">
                          Quantity Per Case
                        </span>
                        <span className="col-md-4 ResponsePart">100ml</span>
                      </div>

                      <div className="row">
                        <span className="col-md-4 HeadPartS">
                          Ethyl Alcohol
                        </span>
                        <span className="col-md-4 ResponsePart">70%</span>
                      </div>
                      <div className="row">
                        <span className="col-md-4 HeadPartS">Piece In One</span>
                        <span className="col-md-4 ResponsePart">Carton</span>
                      </div>
                    </div>
                    <hr />
                    <p>
                      Laconic overheard dear woodchuck wow this outrageously
                      taut beaver hey hello far meadowlark imitatively
                      egregiously hugged that yikes minimally unanimous pouted
                      flirtatiously as beaver beheld above forward energetic
                      across this jeepers beneficently cockily less a the
                      raucously that magic upheld far so the this where crud
                      then below after jeez enchanting drunkenly more much wow
                      callously irrespective limpet.
                    </p>

                    <h3>Packaging & Delivery</h3>
                    <hr />
                    <p>
                      Less lion goodness that euphemistically robin
                      expeditiously bluebird smugly scratched far while thus
                      cackled sheepishly rigid after due one assenting regarding
                      censorious while occasional or this more crane went more
                      as this less much amid overhung anathematic because much
                      held one exuberantly sheep goodness so where rat wry well
                      concomitantly.
                    </p>
                    <p>
                      Scallop or far crud plain remarkably far by thus far
                      iguana lewd precociously and and less rattlesnake contrary
                      caustic wow this near alas and next and pled the yikes
                      articulate about as less cackled dalmatian in much less
                      well jeering for the thanks blindly sentimental whimpered
                      less across objectively fanciful grimaced wildly some wow
                      and rose jeepers outgrew lugubrious luridly irrationally
                      attractively dachshund.
                    </p>
                    <h3 className="mt-4">Suggested Use</h3>
                    <li>Refrigeration not necessary.</li>
                    <li>Stir before serving</li>

                    <h3 className="mt-4">Other Ingredients</h3>
                    <li>Organic raw pecans, organic raw cashews.</li>
                    <li>
                      This butter was produced using a LTG (Low Temperature
                      Grinding) process
                    </li>
                    <li>
                      Made in machinery that processes tree nuts but does not
                      process peanuts, gluten, dairy or soy
                    </li>
                    <h3 className="mt-4">Warnings</h3>
                    <li>
                      Oil separation occurs naturally. May contain pieces of
                      shell.
                    </li>
                  </div>
                )}

                {ProductInfoDIsplay === "Additional info" && (
                  <table style={{ width: "100%" }}>
                    <tbody>
                      {Object.entries(Products.AdditionalInfo).map(
                        ([key, value]) => (
                          <tr key={key}>
                            <td>{key}</td>
                            <td>
                              {Array.isArray(value) ? value.join(", ") : value}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                )}

                {ProductInfoDIsplay === "Vendor" && (
                  <div>
                    {" "}
                    <p> Vendor Data Empty</p>{" "}
                  </div>
                )}

                {ProductInfoDIsplay === "Reviews" && (
                  <div>
                    {" "}
                    <p> Reviews Data Empty</p>{" "}
                  </div>
                )}
              </div>
            </div>
            {/* Bottom Info Part End */}
          </div>
          {/* Product Left Part End */}
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
