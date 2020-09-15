// import React from "react";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    loadFromStorageToState,
    saveToStorageFromState,
} from "../localStorage";
import throttle from "lodash/throttle";
// const store = () => {
//     return createStore(rootReducer);
// };
// const store = configureStore({ reducer: rootReducer });
const persistedState = loadFromStorageToState();

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools()
);

// throttle ensures storage can only be written to once per second
store.subscribe(
    throttle(() => {
        saveToStorageFromState({
            todos: store.getState().todos,
        });
    }, 1000)
);
export default store;

// export default store;
