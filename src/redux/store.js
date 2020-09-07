// import React from "react";
import { createStore } from "redux";
import rootReducer from "./reducers";

// const store = () => {
//     return createStore(rootReducer);
// };
// const store = configureStore({ reducer: rootReducer });
const store = createStore(rootReducer);

export default store;

// export default store;
