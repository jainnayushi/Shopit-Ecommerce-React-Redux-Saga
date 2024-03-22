import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  fetchProduct,
  updateProduct,
} from "../../redux/actions/productAction";
import ProductForm from "../../components/ProductForm";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products.products);
  const totalProducts = useSelector((state) => state.products.totalProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProduct(currentPage, productsPerPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (isFormOpen) window.scrollTo({ top: 10, behavior: "smooth" });
  }, [isFormOpen]);

  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
    setIsFormOpen(false);
  };

  const handleUpdateProduct = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
    setIsFormOpen(false);
  };

  const handleAddButtonClick = () => {
    setSelectedProduct(null);
    setIsFormOpen(true);
  };

  const handleUpdateButtonClick = (product) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  return (
    <>
      <h1>Admin Page</h1>
      <button onClick={handleAddButtonClick} className="btn">
        Add Product
      </button>
      {isFormOpen && (
        <ProductForm
          product={selectedProduct}
          handleUpdateProduct={handleUpdateProduct}
          handleAddProduct={handleAddProduct}
        />
      )}

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
                  onClick={() => dispatch(deleteProduct(product.id))}
                  className="btn"
                >
                  Delete Product
                </button>
                <button
                  onClick={() => {
                    handleUpdateButtonClick(product);
                  }}
                  className="btn"
                >
                  Update Product
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

export default AdminPage;
