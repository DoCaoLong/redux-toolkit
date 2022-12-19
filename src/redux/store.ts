import { configureStore } from "@reduxjs/toolkit";
import orgsReducer from "./org";

const rootReduce = {
    ORGS: orgsReducer,
};
const store = configureStore({
    reducer: rootReduce,
});

export default store;
