import {
  FETCH_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  SEARCH_PRODUCT,
  FETCH_PRODUCT_BY_ID,
} from "../../constants/constants";

export const fetchProduct = (page, productsPerPage) => ({
  type: FETCH_PRODUCT,
  payload: { page, productsPerPage },
});

export const fetchProductById = (productId) => ({
  type: FETCH_PRODUCT_BY_ID,
  payload: { productId },
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: productId,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

export const searchProduct = (page, productsPerPage, query) => ({
  type: SEARCH_PRODUCT,
  payload: { page, productsPerPage, query },
});
