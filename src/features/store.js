import { configureStore } from "@reduxjs/toolkit";
import frontPageSlice from "./frontPageSlice";

export default configureStore({
    reducer: {
        "frontPageSlice": frontPageSlice,
    }
});