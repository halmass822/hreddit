import { useSelector } from "react-redux"
import "./SearchBar.css"
import { selectSubredditLoadError, selectSubreddits } from "../features/frontPageSlice"
import { useEffect } from "react";
import axios from "axios";

export default function SearchBar() {

    const subreddits = useSelector(selectSubreddits);
    const subredditErrorState = useSelector(selectSubredditLoadError);

    return <div id="hreddit_searchbar">
        <input type="text" id="hreddit_searchbar_searchinput" placeholder="Search Subreddits"></input>
        <div id="hreddit_searchbar_searchlistwrapper">
            {subredditErrorState ?
                <p>Subreddit load error, click to retry</p> :
                subreddits.map((x, i) => {
                    return <p key={i}>r/{x}</p>
                })
                }
        </div>
    </div>
}