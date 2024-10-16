import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
// import productReducer from "./reducers/productReducer";

import rootReducer from "./reducers";
// import rootReducer from "./reducers/index"

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
