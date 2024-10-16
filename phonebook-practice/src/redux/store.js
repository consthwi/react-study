import { createStore } from "redux";
import reducer from "./reducer/reducer";

let store = createStore(reducer);

export default store;
// Provider가 사용할 수 있도록 store도 export
