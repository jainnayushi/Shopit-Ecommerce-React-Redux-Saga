import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../../constants/constants";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        const updatedCart = state.map((item) =>
          item.id === action.payload.id &&
          item.selectedQuantity < action.payload.quantity
            ? { ...item, selectedQuantity: item.selectedQuantity + 1 }
            : item
        );
        return updatedCart;
      } else {
        // If item doesn't exist
        return [...state, action.payload];
      }
    case REMOVE_FROM_CART:
      const remainingItems = state.filter((item) => item.id !== action.payload);
      return [...remainingItems];

    case INCREASE_QUANTITY:
      const increasedCart = state.map((item) =>
        item.id === action.payload && item.selectedQuantity < item.quantity
          ? { ...item, selectedQuantity: item.selectedQuantity + 1 }
          : item
      );
      return increasedCart;

    case DECREASE_QUANTITY:
      const decreasedCart = state.map((item) =>
        item.id === action.payload
          ? { ...item, selectedQuantity: item.selectedQuantity - 1 }
          : item
      );
      return decreasedCart.filter((item) => item.selectedQuantity > 0); // Remove items with quantity zero

    case EMPTY_CART:
      state = [];
      return [...state];

    default:
      return state;
  }
};

export default cartReducer;
