import { useDispatch, useSelector } from "react-redux";
import "./TopPanel.css";
import { getPostsBySubreddit, selectCurrentSubreddit, setSelectedFilter } from "../../features/frontPageSlice";

export default function TopPanel() {

    const dispatch = useDispatch();

    const currentSubreddit = useSelector(selectCurrentSubreddit);

    function handleButtonClick(input) {
        dispatch(setSelectedFilter(input));
        dispatch(getPostsBySubreddit([currentSubreddit, input]));
    }

    return <div id="hreddit_topPanel">
        <button id="hreddit_topPanel_hot" onClick={() => handleButtonClick("hot")}>Hot</button>
        <button id="hreddit_topPanel_hot" onClick={() => handleButtonClick("new")}>New</button>
        <button id="hreddit_topPanel_hot" onClick={() => handleButtonClick("top")}>Top</button>
        <button id="hreddit_topPanel_hot" onClick={() => handleButtonClick("rising")}>Rising</button>
    </div>
}