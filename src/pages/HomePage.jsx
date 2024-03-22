import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../redux/actions/productAction";
import Pagination from "../components/Pagination";
import { Link, Navigate } from "react-router-dom";
import { addToCart } from "../redux/actions/cartAction";
import { addToWishlist } from "../redux/actions/wishlistAction";
import Banner from "../assets/banner.png";
import "../styles/Form.css";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const HomePage = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products.products);
  const totalProducts = useSelector((state) => state.products.totalProducts);
  const isAuthenticated = useSelector(
    (state) => state.userData.isAuthenticated
  );
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    dispatch(fetchProduct(currentPage, productsPerPage));
  }, [dispatch, currentPage]);

  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <img src={Banner} alt="banner" className="banner" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "80px",
          justifyContent: "space-evenly",
        }}
      >
        {productData.map((product) => {
          return (
            <div key={product.id} className="card">
              <div>
                <Link
                  to={`/ProductDetails/${product.id}`}
                  className="card-link"
                >
                  <img
                    src={product.image}
                    alt="Product"
                    className="product-img"
                  />
                </Link>
                <h4>{product.title}</h4>
                <p>
                  <del className="price">{product.price}</del>
                  {product.offerPrice}
                </p>
              </div>
              <div>
                <button
                  onClick={() =>
                    isAuthenticated
                      ? dispatch(addToWishlist(product))
                      : alert("Please login first!")
                  }
                  className="btn"
                >
                  Add to Wishlist
                  <FaHeart />
                </button>
                <button
                  onClick={() =>
                    isAuthenticated
                      ? dispatch(addToCart(product))
                      : alert("Please login first!")
                  }
                  className="btn"
                >
                  Add To Cart
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default HomePage;
