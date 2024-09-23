import { useDispatch, useSelector } from "react-redux"
import "./SearchBar.css"
import { fetchTopSubreddits, getPostsBySubreddit, selectSubredditLoadError, selectSubreddits } from "../../features/frontPageSlice"
import { useEffect, useState } from "react";

export default function SearchBar() {

    const dispatch = useDispatch();

    const subreddits = useSelector(selectSubreddits);
    const subredditErrorState = useSelector(selectSubredditLoadError);

    const [displayedSubreddits, setDisplayedSubreddits] = useState(subreddits);

    useEffect(() => {
        setDisplayedSubreddits(subreddits);
    }, [subreddits]);

    return <div id="hreddit_searchbar">
        <input type="text" id="hreddit_searchbar_searchinput" placeholder="Search Subreddits"></input>
        <div id="hreddit_searchbar_searchlistwrapper">
            <div id="hreddit_searchbar_searchlist">
                {subredditErrorState ?
                    <p onClick={() => dispatch(fetchTopSubreddits())}>Subreddit load error, click to retry</p> :
                    displayedSubreddits.map((x, i) => {
                        return <p key={i} className="noselect" onClick={() => dispatch(getPostsBySubreddit([x,""]))}>r/{x}</p>
                    })
                    }
            </div>
        </div>
    </div>
}