import { useDispatch, useSelector } from "react-redux";
import "./Modal.css";
import { selectLoadingPostState, selectOverlayState, setOverlayState } from "../../features/postSlice";

export default function Modal() {

    const dispatch = useDispatch();

    const overlayState = useSelector(selectOverlayState);
    const loadingPostState = useSelector(selectLoadingPostState);

    return <div id="hreddit_modal_wrapper" hidden={!overlayState}>
        <div id="hreddit_modal_backdrop" onClick={() => dispatch(setOverlayState(false))}></div>
        <div id="hreddit_modal_main">
            <div id="hreddit_modal_content">
                <p>content</p>
            </div>
            <div id="hreddit_modal_comments">
                <p>commment</p>
                <p>commment</p>
                <p>commment</p>
                <p>commment</p>
            </div>
        </div>
    </div>
    
}