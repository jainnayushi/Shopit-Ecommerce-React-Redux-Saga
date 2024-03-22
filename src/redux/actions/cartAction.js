import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../../constants/constants";

export const addToCart = (data) => ({
  type: ADD_TO_CART,
  payload: { ...data, selectedQuantity: 1 },
});

export const removeFromCart = (dataId) => ({
  type: REMOVE_FROM_CART,
  payload: dataId,
});

export const increaseQuantity = (dataId) => ({
  type: INCREASE_QUANTITY,
  payload: dataId,
});

export const decreaseQuantity = (dataId) => ({
  type: DECREASE_QUANTITY,
  payload: dataId,
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});
