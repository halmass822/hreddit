import { useDispatch, useSelector } from "react-redux";
import "./Modal.css";
import { selectLoadingPostState, selectOverlayState, selectPostDetails, setOverlayState } from "../../features/postSlice";

export default function Modal() {

    const dispatch = useDispatch();

    const overlayState = useSelector(selectOverlayState);
    const loadingPostState = useSelector(selectLoadingPostState);

    const postDetails = useSelector(selectPostDetails);

    console.log(postDetails);

    return <div id="hreddit_modal_wrapper" hidden={!overlayState}>
        <div id="hreddit_modal_backdrop" onClick={() => dispatch(setOverlayState(false))}></div>
        <div id="hreddit_modal_main">
            {loadingPostState ? <img id="hreddit_modal_loadstateimg" alt="spinning reddit logo" src="./reddit_icon.png"></img> : <>
                    <div id="hreddit_modal_content">
                        <h4>{postDetails[0].data.children[0].data.title}</h4>
                    </div>
                    <div id="hreddit_modal_comments">
                    </div>
            </>}
        </div>
    </div>
    
}