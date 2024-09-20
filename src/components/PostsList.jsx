import { useSelector } from "react-redux";
import { selectPosts } from "../features/frontPageSlice";
import PostRow from "./PostRow";

export default function PostsList() {
    const loadedPosts = useSelector(selectPosts);

    return <div id="hreddit_postslist">
        {loadedPosts.map((x) => <PostRow postDetails={x}/>)}
    </div>
}