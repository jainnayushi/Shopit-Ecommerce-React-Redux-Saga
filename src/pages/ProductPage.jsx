import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../redux/actions/productAction";
import { addToCart } from "../redux/actions/cartAction";
import { addToWishlist } from "../redux/actions/wishlistAction";
import { updateProduct, deleteProduct } from "../redux/actions/productAction";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const params = useParams();
  const { productId } = params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  const product = useSelector((state) => state.products.product);
  const isAdmin = useSelector((state) => state.userData.isAdmin);

  return (
    <div>
      <div key={product.id}>
        <img
          src={product.image}
          style={{ width: "300px", height: "300px" }}
          alt="Product"
        />
        <h1>{product.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab
          nostrum laudantium odit maxime reprehenderit voluptate nam nisi, sequi
          sit.
        </p>
        <h4>
          <del className="price">{product.price}</del>
          {product.offerPrice}
        </h4>
        {isAdmin ? (
          <>
            <button
              onClick={() => dispatch(updateProduct(product))}
              className="btn"
            >
              Update Product
            </button>

            <button
              onClick={() => dispatch(deleteProduct(product.id))}
              className="btn"
            >
              Delete Product
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="btn"
            >
              Add to Cart
            </button>
            <button
              onClick={() => dispatch(addToWishlist(product))}
              className="btn"
            >
              Add to Wishlist
            </button>
          </>
        )}
      </div>
      <p>
        <Link to={"/"}>View all Products</Link>
      </p>
    </div>
  );
};

export default ProductPage;
