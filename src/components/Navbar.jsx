import React from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import "../styles/Navbar.css";
import { FaShoppingCart, FaHeart, FaSignOutAlt } from "react-icons/fa";
const Navbar = ({ isAuthenticated, isAdmin }) => {
  const cartLength = useSelector((state) => state.cartData.length);
  const wishlistLength = useSelector((state) => state.wishlistData.length);

  return (
    <nav className="header">
      <Link to="/">
        <h1 className="logo">Shop-It</h1>
      </Link>
      <div className="header-items">
        {isAdmin ? (
          <Link to="/admin" className="nav-link">
            Admin
          </Link>
        ) : (
          <Link to="/" className="nav-link">
            Products
          </Link>
        )}
      </div>
      <div className="header-items">
        {isAuthenticated ? (
          <>
            {!isAdmin && (
              <>
                <Link to="/wishlist" className="nav-link icon">
                  <FaHeart />
                  <span className="icon-span">{wishlistLength}</span>
                </Link>
                <Link to="/cart" className="nav-link icon">
                  <FaShoppingCart />
                  <span className="icon-span">{cartLength}</span>
                </Link>
              </>
            )}
            <Link to="/logout" className="nav-link icon">
              <FaSignOutAlt />
            </Link>
          </>
        ) : (
          <>
            <Link to="/register" className="nav-link">
              Sign Up
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.userData.isAdmin,
  isAuthenticated: state.userData.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
