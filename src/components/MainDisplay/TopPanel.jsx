import { useDispatch, useSelector } from "react-redux";
import "./TopPanel.css";
import { getPostsBySubreddit, selectCurrentFilter, selectCurrentSubreddit, setSelectedFilter } from "../../features/frontPageSlice";

export default function TopPanel() {

    const dispatch = useDispatch();

    const currentSubreddit = useSelector(selectCurrentSubreddit);
    const currentFilter = useSelector(selectCurrentFilter);

    console.log(currentFilter);

    function handleButtonClick(input) {
        dispatch(setSelectedFilter(input));
        dispatch(getPostsBySubreddit([currentSubreddit, input]));
    }

    return <div id="hreddit_topPanel">
        <button id="hreddit_topPanel_hot" onClick={() => handleButtonClick("hot")} className={currentFilter === "hot" ? "hreddit_selectedfilter" : null}>Hot</button>
        <button id="hreddit_topPanel_hot" onClick={() => handleButtonClick("new")} className={currentFilter === "new" ? "hreddit_selectedfilter" : null}>New</button>
        <button id="hreddit_topPanel_hot" onClick={() => handleButtonClick("top")} className={currentFilter === "top" ? "hreddit_selectedfilter" : null}>Top</button>
        <button id="hreddit_topPanel_hot" onClick={() => handleButtonClick("rising")} className={currentFilter === "rising" ? "hreddit_selectedfilter" : null}>Rising</button>
    </div>
}