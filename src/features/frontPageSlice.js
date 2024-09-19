import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTopSubreddits = createAsyncThunk(
    "frontPageSlice/fetchSubreddits",
    async() => {
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
        posts: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopSubreddits.fulfilled, (state, action) => {
            console.log(action.payload)
            // state.frontPageSlice.subreddits = action.payload.map((x) => )
        });
        builder.addCase(fetchTopSubreddits.pending, (state) => {
            console.log("hmmmm");
        });
        builder.addCase(fetchTopSubreddits.rejected, (state, action) => {
            console.log("failed!");
        });
    }    
});

export const selectErrorState = (state) => state.frontPageSlice.errorState;
export const selectLoadingState = (state) => state.frontPageSlice.loadingState;
export const selectCurrentSubreddit = (state) => state.frontPageSlice.currentSubreddit;
export const selectSubreddits = (state) => state.frontPageSlice.subreddits;
export const selectPosts = (state) => state.frontPageSlice.posts;

export default frontPageSlice.reducer;