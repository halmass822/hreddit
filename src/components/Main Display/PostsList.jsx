import { useSelector } from "react-redux";
import { selectPosts } from "../../features/frontPageSlice";
import PostRow from "./PostRow";

import "./PostsList.css";

export default function PostsList() {
    const loadedPosts = useSelector(selectPosts);

    return <div id="hreddit_postslist_wrapper">
        <div id="hreddit_postslist">
            {loadedPosts.map((x, i) => <PostRow postDetails={x} key={i}/>)}
        </div>
    </div>
}