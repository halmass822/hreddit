import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTopSubreddits = createAsyncThunk(
    "frontPageSlice/fetchSubreddits",
    async () => {
        const response = await axios.get("https://www.reddit.com/subreddits/popular.json");
        return response.data;
    }
)

export const getPostsBySubreddit = createAsyncThunk(
    "frontPageSlice/getPostsBySubreddit",
    async ([subreddit, filter]) => {
        const response = await axios.get(`https://www.reddit.com/r/${subreddit}/${filter}.json`);
        return response.data;
    }
)

const frontPageSlice = createSlice({
    name: "frontPageSlice",
    initialState: {
        errorState: false,
        loadingState: true,
        subreddits: ["Loading subreddits..."],
        selectedSubreddit: "popular",
        selectedFilter: "hot",
        subredditLoadError: false,
        loadingPostsState: false,
        errorPostsState: false,
        posts: [],
    },
    reducers: {
        setSelectedSubreddit: (state, action) => {
            state.selectedSubreddit = action.payload;
        },
        setSelectedFilter: (state, action) => {
            state.selectedFilter = action.payload;
        }
    },
    extraReducers: (builder) => {
        //get subreddits
        builder.addCase(fetchTopSubreddits.fulfilled, (state, action) => {
            state.subreddits = action.payload.data.children.map((x) => x.data.display_name);
            state.subredditLoadError = false;
        });
        builder.addCase(fetchTopSubreddits.pending, (state) => {
            state.subreddits = ["Loading subreddits..."];
        });
        builder.addCase(fetchTopSubreddits.rejected, (state) => {
            state.subredditLoadError = true;
        });
        
        //get posts
        builder.addCase(getPostsBySubreddit.fulfilled, (state, action) => {
            state.posts = action.payload.data.children.map((x) => x.data);
        });
        builder.addCase(getPostsBySubreddit.pending, (state) => {
            state.loadingPostsState = true;
            state.errorPostsState = false;
        });
        builder.addCase(getPostsBySubreddit.rejected, (state) => {
            state.loadingPostsState = false;
            state.errorPostsState = true;
        });
    }    
});

export const selectErrorState = (state) => state.frontPageSlice.errorState;
export const selectLoadingState = (state) => state.frontPageSlice.loadingState;
export const selectCurrentSubreddit = (state) => state.frontPageSlice.selectedSubreddit;
export const selectCurrentFilter = (state) => state.frontPageSlice.selectedFilter;
export const selectSubreddits = (state) => state.frontPageSlice.subreddits;
export const selectSubredditLoadError = (state) => state.frontPageSlice.subredditLoadError;
export const selectPosts = (state) => state.frontPageSlice.posts;

export const {setSelectedSubreddit, setSelectedFilter} = frontPageSlice.actions;

export default frontPageSlice.reducer;