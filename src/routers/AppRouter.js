import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import AuthenticatedRoute from "./AuthenticatedRoute";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/auth/SignupPage";
import LoginPage from "../pages/auth/LoginPage";
import AdminPage from "../pages/admin/AdminPage";
import ProductForm from "../components/ProductForm";
import WishlistPage from "../pages/WishlistPage";
import CartPage from "../pages/CartPage";
import ProductPage from "../pages/ProductPage";
import LogoutPage from "../pages/auth/LogoutPage";
import UserRoute from "./UserRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<SignupPage />} />
      <Route
        path="/login"
        element={
          <UserRoute>
            <LoginPage />
          </UserRoute>
        }
      />
      <Route path="/logout" element={<LogoutPage />} />
      <Route
        path="/productDetails/:productId"
        element={
          <AuthenticatedRoute>
            <ProductPage />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/addProduct"
        element={
          <AuthenticatedRoute>
            <ProductForm />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <AuthenticatedRoute>
            <WishlistPage />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <AuthenticatedRoute>
            <CartPage />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminPage />
          </AdminRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
