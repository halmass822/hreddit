import { useSelector } from "react-redux"
import "./SearchBar.css"
import { selectSubreddits } from "../features/frontPageSlice"
import { useEffect } from "react";
import axios from "axios";

export default function SearchBar() {

    const subreddits = useSelector(selectSubreddits);

    return <div id="hreddit_searchbar">
        <input type="text" id="hreddit_searchbar_searchinput" placeholder="Search Subreddits"></input>
        <div id="hreddit_searchbar_searchlistwrapper">
            {subreddits.map((x, i) => {
                return <p key={i}>r/{x}</p>
            })}
        </div>
    </div>
}