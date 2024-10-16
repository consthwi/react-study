import { createStore } from "redux";
import contactReducer from "./reducer/reducer";

let store = createStore(contactReducer)

export default store;