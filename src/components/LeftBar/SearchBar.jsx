import { useDispatch, useSelector } from "react-redux"
import "./SearchBar.css"
import { fetchTopSubreddits, getPostsBySubreddit, selectCurrentFilter, selectSubredditLoadError, selectSubreddits, setSelectedSubreddit } from "../../features/frontPageSlice"
import { useEffect, useState } from "react";

export default function SearchBar() {

    const dispatch = useDispatch();

    const selectedFilter = useSelector(selectCurrentFilter);

    const subreddits = useSelector(selectSubreddits);
    const subredditErrorState = useSelector(selectSubredditLoadError);

    const [displayedSubreddits, setDisplayedSubreddits] = useState(subreddits);

    useEffect(() => {
        setDisplayedSubreddits(subreddits);
    }, [subreddits]);

    function handleSubredditSelect(input) {
        dispatch(setSelectedSubreddit(input));
        dispatch(getPostsBySubreddit([input, selectedFilter]));
    }

    return <div id="hreddit_searchbar">
        <input type="text" id="hreddit_searchbar_searchinput" placeholder="Search Subreddits"></input>
        <div id="hreddit_searchbar_searchlistwrapper">
            <div id="hreddit_searchbar_searchlist">
                {subredditErrorState ?
                    <p onClick={() => dispatch(fetchTopSubreddits())}>Subreddit load error, click to retry</p> :
                    <>
                        <p className="noselect" onClick = {() => handleSubredditSelect("popular")}>r/Popular</p>
                        <p className="noselect" onClick = {() => handleSubredditSelect("all")}>r/All</p>
                        {displayedSubreddits.map((x, i) => {
                            return <p key={i} className="noselect" onClick={() => handleSubredditSelect(x)}>r/{x}</p>
                        })}
                    </>
                    }
            </div>
        </div>
    </div>
}