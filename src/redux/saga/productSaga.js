import { call, put, takeEvery } from "redux-saga/effects";
import {
  ADD_PRODUCT,
  FETCH_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  SEARCH_PRODUCT,
  ADD_PRODUCT_SAGA,
  FETCH_PRODUCT_SAGA,
  DELETE_PRODUCT_SAGA,
  UPDATE_PRODUCT_SAGA,
  SEARCH_PRODUCT_SAGA,
  FETCH_PRODUCT_BY_ID,
  FETCH_PRODUCT_BY_ID_SAGA,
} from "../../constants/constants";
import { PRODUCTS_URL } from "../../constants/routes";
import axios from "axios";

function* fetchProductSaga(action) {
  try {
    const { page, productsPerPage } = action.payload;
    const response = yield axios.get(
      `${PRODUCTS_URL}?_page=${page}&_limit=${productsPerPage}`
    );
    const totalProducts = parseInt(response.headers["x-total-count"], 10);
    yield put({
      type: FETCH_PRODUCT_SAGA,
      payload: { products: response.data, totalProducts },
    });
  } catch (error) {
    console.error("Error fetching product:", error);
  }
}

function* fetchProductByIdSaga(action) {
  try {
    const { productId } = action.payload;
    const response = yield axios.get(`${PRODUCTS_URL}/${productId}`);
    yield put({
      type: FETCH_PRODUCT_BY_ID_SAGA,
      payload: { product: response.data },
    });
  } catch (error) {
    console.error("Error fetching products by category:", error);
  }
}

function* searchProductSaga(action) {
  try {
    const { page, productsPerPage, query } = action.payload;
    const response = yield axios.get(
      `${PRODUCTS_URL}?q=${query}&_page=${page}&_limit=${productsPerPage}`
    );
    const totalProducts = parseInt(response.headers["x-total-count"], 10);
    yield put({
      type: SEARCH_PRODUCT_SAGA,
      payload: { searchedProducts: response.data, totalProducts },
    });
  } catch (error) {
    console.error("Error fetching products by category:", error);
  }
}

function* addProductSaga(action) {
  try {
    const response = yield call(axios.post, PRODUCTS_URL, action.payload);
    yield put({ type: ADD_PRODUCT_SAGA, payload: response.data });
  } catch (error) {
    console.error("Error adding product:", error);
  }
}

function* deleteProductSaga(action) {
  try {
    yield axios.delete(`${PRODUCTS_URL}/${action.payload}`);
    yield put({ type: DELETE_PRODUCT_SAGA, payload: action.payload });
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}

function* updateProductSaga(action) {
  try {
    const response = yield axios.put(
      `${PRODUCTS_URL}/${action.payload.id}`,
      action.payload
    );
    yield put({ type: UPDATE_PRODUCT_SAGA, payload: response.data });
  } catch (error) {
    console.error("Error updating product:", error);
  }
}

function* productSaga() {
  yield takeEvery(ADD_PRODUCT, addProductSaga);
  yield takeEvery(DELETE_PRODUCT, deleteProductSaga);
  yield takeEvery(UPDATE_PRODUCT, updateProductSaga);
  yield takeEvery(FETCH_PRODUCT, fetchProductSaga);
  yield takeEvery(FETCH_PRODUCT_BY_ID, fetchProductByIdSaga);
  yield takeEvery(SEARCH_PRODUCT, searchProductSaga);
}

export default productSaga;
