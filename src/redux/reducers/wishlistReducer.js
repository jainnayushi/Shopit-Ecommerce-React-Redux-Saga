import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  EMPTY_WISHLIST,
} from "../../constants/constants";

const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) return [...state];
      else return [...state, action.payload];
    case REMOVE_FROM_WISHLIST:
      const remainingItems = state.filter((item) => item.id !== action.payload);
      return [...remainingItems];
    case EMPTY_WISHLIST:
      state = [];
      return [...state];

    default:
      return state;
  }
};

export default wishlistReducer;
