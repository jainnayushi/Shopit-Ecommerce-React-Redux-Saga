import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromWishlist,
  emptyWishlist,
} from "../redux/actions/wishlistAction";
import { addToCart } from "../redux/actions/cartAction";
import "../styles/Wishlist.css";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlistData);

  return (
    <div className="wishlist-container">
      <div className="wishlist-items">
        {wishlistData.length > 0 ? (
          <>
            <h3 className="favorites-heading">Here's your Favorites</h3>
            <table className="wishlist-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Color</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {wishlistData.length > 0 ? (
                  wishlistData.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image}
                          alt={item.category}
                          className="wishlist-item-image"
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.color}</td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                      <td>
                        <button
                          className="wishlist-action-btn add-to-cart-btn"
                          onClick={() => {
                            dispatch(addToCart(item));
                          }}
                        >
                          Add to Cart
                        </button>
                        <button
                          className="wishlist-action-btn remove-from-wishlist-btn"
                          onClick={() => {
                            dispatch(removeFromWishlist(item.id));
                          }}
                        >
                          Remove from Wishlist
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <></>
                )}
              </tbody>
            </table>
            <button
              className="empty-btn"
              onClick={() => dispatch(emptyWishlist())}
            >
              Empty Wishlist
            </button>
          </>
        ) : (
          <p className="empty-message">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
