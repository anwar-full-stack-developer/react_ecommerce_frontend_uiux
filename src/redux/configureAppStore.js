import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import monitorReducersEnhancer from "./enhancers/monitorReducers";
import loggerMiddleware from "./middleware/logger";
// import rootReducer from './reducers'


import { productListReducer } from "../reducers/productReducer";
const initialState = {};
const rootReducer = combineReducers({
  example: () => [],
  productList: productListReducer
  // products: () => [
  //   {id: 10, name: "iPhone 13", price: 1000},
  //   {id: 11, name: "Samsung A30", price: 500},
  //   {id: 12, name: "Mortola M2", price: 300},
  //   {id: 13, name: "Symphony Wz", price: 200}
  // ]
});

// export default function configureStore(preloadedState) {
//   const middlewares = [loggerMiddleware, thunkMiddleware]
//   const middlewareEnhancer = applyMiddleware(...middlewares)

//   const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//   const composedEnhancers = compose(...enhancers)

//   const store = createStore(rootReducer, preloadedState, composedEnhancers)

//   return store
// }

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    initialState: initialState,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware).concat(thunkMiddleware),
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
    enhancers: [monitorReducersEnhancer],
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}
