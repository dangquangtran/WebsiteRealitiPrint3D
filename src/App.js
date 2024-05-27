import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../src/components/user/login/loginPages";
import RegistrationAccount from "../src/components/user/register/registration";
import HomePage from "../src/containers/home/homePage";
import ErrorPage from "../src/containers/errorPages/404pages";
import ContactPage from "../src/components/user/contact/contact";
import BestSale from "../src/containers/home/bestSale";
import ProductsList from "../src/containers/home/product";
import BlogPages from "../src/containers/home/blogPage";
import ProductDetailPage from "../src/containers/home/productDetail";
import ViewCart from "../src/components/products/productCarts/productCarts";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/reality3d/home-page" />} />
        <Route path="/reality3d/home-page" element={<HomePage />} />
        <Route path="/reality3d/login-account" element={<Login />} />
        <Route path="/reality3d/404-page" element={<ErrorPage />} />
        <Route path="/reality3d/best-sale" element={<BestSale />} />
        <Route path="/reality3d/product-list" element={<ProductsList />} />
        <Route path="/reality3d/view-blog" element={<BlogPages />} />
        <Route path="/reality3d/view-cart" element={<ViewCart />} />
        <Route path="/reality3d/contact-page" element={<ContactPage />} />
        {/* <Route
          path="/reality3d/product-detail/:id"
          element={<ProductDetailPage />}
        /> */}
        <Route
          path="/reality3d/registration-account"
          element={<RegistrationAccount />}
        />
        <Route
          path="/reality3d/product-detail"
          element={<ProductDetailPage />}
        />
      </Routes>
    </Router>
  );
}