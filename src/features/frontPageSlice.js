import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTopSubreddits = createAsyncThunk(
    "frontPageSlice/fetchSubreddits",
    async () => {
        const response = await axios.get("https://www.reddit.com/subreddits/popular.json");
        return response.data;
    }
)

const frontPageSlice = createSlice({
    name: "frontPageSlice",
    initialState: {
        errorState: false,
        loadingState: true,
        currentSubreddit: "popular",
        subreddits: ["Loading subreddits..."],
        subredditLoadError: false,
        posts: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopSubreddits.fulfilled, (state, action) => {
            console.log(action.payload.data.children.map((x) => x.data.display_name));
            state.subreddits = action.payload.data.children.map((x) => x.data.display_name);
            state.subredditLoadError = false;
        });
        builder.addCase(fetchTopSubreddits.rejected, (state) => {
            state.subredditLoadError = true;
        });
    }    
});

export const selectErrorState = (state) => state.frontPageSlice.errorState;
export const selectLoadingState = (state) => state.frontPageSlice.loadingState;
export const selectCurrentSubreddit = (state) => state.frontPageSlice.currentSubreddit;
export const selectSubreddits = (state) => state.frontPageSlice.subreddits;
export const selectSubredditLoadError = (state) => state.frontPageSlice.subredditLoadError;
export const selectPosts = (state) => state.frontPageSlice.posts;

export default frontPageSlice.reducer;