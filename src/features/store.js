import { configureStore } from "@reduxjs/toolkit";
import frontPageSlice from "./frontPageSlice";
import postSlice from "./postSlice";

export default configureStore({
    reducer: {
        "frontPageSlice": frontPageSlice,
        "postSlice": postSlice
    }
});