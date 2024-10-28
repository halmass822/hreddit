import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../features/frontPageSlice";
import PostRow from "./PostRow";

import "./PostsList.css";
import { getPostDetails, setOverlayState } from "../../features/postSlice";

export default function PostsList() {
    const dispatch = useDispatch();
    const loadedPosts = useSelector(selectPosts);

    function openPost(inputUrl) {
        dispatch(setOverlayState(true));
        dispatch(getPostDetails(inputUrl));
    }

    console.log(loadedPosts[0]);

    return <div id="hreddit_postslist_wrapper">
        <div id="hreddit_postslist">
            {loadedPosts.map((x, i) => <PostRow postDetails={x} key={i} openPostProp={openPost}/>)}
        </div>
    </div>
}