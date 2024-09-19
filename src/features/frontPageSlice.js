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
        subreddits: ["popular"],
        subredditLoadError: false,
        posts: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopSubreddits.fulfilled, (state, action) => {
            console.log(action.payload.data.children);
            console.log(action.payload.data.children.map((x) => x.data.display_name));
            state.subreddits = action.payload.data.children.map((x) => x.data.display_name);
            // console.log(action.payload.map((x) => ))
            // state.subreddits = action.payload.map()
        });
        builder.addCase(fetchTopSubreddits.rejected, (state) => {
            state.frontPageSlice.subredditLoadError = true;
        });
    }    
});

export const selectErrorState = (state) => state.frontPageSlice.errorState;
export const selectLoadingState = (state) => state.frontPageSlice.loadingState;
export const selectCurrentSubreddit = (state) => state.frontPageSlice.currentSubreddit;
export const selectSubreddits = (state) => state.frontPageSlice.subreddits;
export const selectPosts = (state) => state.frontPageSlice.posts;

export default frontPageSlice.reducer;