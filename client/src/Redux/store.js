import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const backend_url = "http://localhost:8000";

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
