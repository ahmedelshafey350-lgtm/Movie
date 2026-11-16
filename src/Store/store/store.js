import { configureStore } from "@reduxjs/toolkit";
import languageReducr from "../Reducer/reducer";

const store = configureStore({
    reducer: languageReducr
});

export default store;