import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../redux/actions/cartAction";
import "../styles/Cart.css";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/actions/cartAction";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);
  return (
    <div className="cart-container">
      <button
        className="empty-btn"
        onClick={() => {
          dispatch(emptyCart());
        }}
      >
        Empty Cart
      </button>
      <div>
        <table className="cart-table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Selected Quantity</th>
              <th>Color</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartData.length > 0 ? (
              cartData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(increaseQuantity(item.id));
                      }}
                      className="cart-action-btn quantity-btn"
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        dispatch(decreaseQuantity(item.id));
                      }}
                      className="cart-action-btn remove-btn"
                    >
                      -
                    </button>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.selectedQuantity}</td>
                  <td>{item.color}</td>
                  <td>{item.price}</td>

                  <td>
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(item.id));
                      }}
                      className="cart-action-btn remove-btn"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <p className="empty-message">Your Cart is empty.</p>
            )}
          </tbody>
        </table>
      </div>
      <button className="btn">Checkout</button>
    </div>
  );
};

export default CartPage;
