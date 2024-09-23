import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const getPostDetails = createAsyncThunk(
    async([subreddit, postId]) => {
        const response = await axios.get(`https://www.reddit.com/r/${subreddit}/comments/${postId}/.json`);
        return response.data;
    }
);

const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        overlayState: {},
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
        builder.addCase(getPostDetails.fulfilled, (state) => {
            state.loadingPostState = false;
            state.errorState = false;
            state.postDetails = action.payload;
        })
    }
});

export const selectOverlayState = (state) => state.postSlice.overlayState;
export const selectPostDetails = (state) => state.postSlice.postDetails;


export const {setOverlayState} = postSlice.actions;

export default postSlice.reducer;