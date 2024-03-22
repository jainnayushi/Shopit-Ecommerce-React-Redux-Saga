import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  EMPTY_WISHLIST,
} from "../../constants/constants";

export const addToWishlist = (data) => ({
  type: ADD_TO_WISHLIST,
  payload: data,
});

export const removeFromWishlist = (dataId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: dataId,
});

export const emptyWishlist = () => ({
  type: EMPTY_WISHLIST,
});
