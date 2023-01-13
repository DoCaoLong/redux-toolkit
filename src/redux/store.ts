import { configureStore } from "@reduxjs/toolkit";
import orgsReducer from "./org";
import counterReducer from "./counter";

const rootReducer = {
    ORGS: orgsReducer,
    COUNTER: counterReducer,
};
const store = configureStore({
    reducer: rootReducer,
});

export default store;
