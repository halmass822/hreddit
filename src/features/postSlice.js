import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getPostDetails = createAsyncThunk(
    "postSlice/getPostDetails",
    async(inputUrl) => {
        const response = await axios.get(`${inputUrl}.json`);
        return response.data;
    }
);

const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        overlayState: false,
        loadingPostState: false,
        errorState: false,
        postDetails: {},
    },
    reducers: {
        setOverlayState: (state, action) => {
            state.overlayState = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPostDetails.pending, (state) => {
            state.loadingPostState = true;
            state.errorState = false;
        });
        builder.addCase(getPostDetails.rejected, (state) => {
            state.loadingPostState = false;
            state.errorState = true;
        })
        builder.addCase(getPostDetails.fulfilled, (state, action) => {
            state.loadingPostState = false;
            state.errorState = false;
            state.postDetails = action.payload;
        })
    }
});

export const selectOverlayState = (state) => state.postSlice.overlayState;
export const selectPostDetails = (state) => state.postSlice.postDetails;
export const selectLoadingPostState = (state) => state.postSlice.loadingPostState;
export const selectErrorPostState = (state) => state.postSlice.errorState;

export const {setOverlayState} = postSlice.actions;

export default postSlice.reducer;