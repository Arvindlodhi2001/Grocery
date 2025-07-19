import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Listing from "./Listing/Listing";
import PageNotFound404 from "./PageNotFound404/PageNotFound404";
import DetailsProduct from "./DetailsProduct/DetailsProduct";
import MyAccount from "./MyAccount/MyAccount";

import ForgetPassword from "./ForgetPassword/ForgetPassword";
import ResetPassword from "./ResetPassword/ResetPassword";
import Contact from "./Contact/Contact";
import PurchaseGuide from "./PurchaseGuide/PurchaseGuide";
import Cart from "./Cart/Cart";
import ProductPage from "./ProductPage/ProductPage";

//  Admin Panel

import Dashboard from "./AdminPannel/Dashboard";
import Product from "./AdminPannel/Product/Product";
import CategoryUpload from "./AdminPannel/Category/CategoryUpload";
import Wishlist from "./Wishlist/Wishlist";
import ProductDetails from "./ProductDetails/ProductDetails";
import LoginPage from "./Login/LoginPage";

const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Listing" element={<Listing />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/DetailsProduct" element={<DetailsProduct />} />
      <Route path="/MyAccount" element={<MyAccount />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/ForgetPassword" element={<ForgetPassword />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
      <Route path="/PurchaseGuide" element={<PurchaseGuide />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path="/Product/Details" element={<ProductDetails />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Product/View/:ProductID" element={<ProductPage />} />

      {/*  Admin Router */}

      <Route path="/Admin/Dashboard" element={<Dashboard />} />
      <Route path="/Admin/Product" element={<Product />} />
      <Route path="/Admin/Category/Upload" element={<CategoryUpload />} />

      <Route path="*" element={<PageNotFound404 />} />
    </Routes>
  );
};

export default IndexRouter;
