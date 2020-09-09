// import React from "react";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

// const store = () => {
//     return createStore(rootReducer);
// };
// const store = configureStore({ reducer: rootReducer });
const store = createStore(rootReducer, composeWithDevTools());

export default store;

// export default store;
