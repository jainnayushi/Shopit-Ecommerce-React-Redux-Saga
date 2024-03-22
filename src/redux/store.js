import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../redux/reducers/rootReducer";
import productSaga from "../redux/saga/productSaga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [sagaMiddleware],
});

const persistor = persistStore(store);
sagaMiddleware.run(productSaga);

export default store;
export { persistor };
