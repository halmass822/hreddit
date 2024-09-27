export default function PostRow(props) {

    function displayData() { //determines what type of media (if any) and displays it
        switch(props.postDetails.post_hint) {
            case "image":
                return <img className="hreddit_postlist_post_image" src={props.postDetails.thumbnail} height={props.postDetails.thumbnail_height} width={props.postDetails.thumbnail_width}></img>
            default:
                break;
        }
    }

    return <div className="hreddit_postrow" onClick={() => props.openPostProp(props.postDetails.url)}>
        <div className="hreddit_postrow_titleandpreview">
        {displayData()}
        <h4>{props.postDetails.title}</h4>
        </div>
        <div className="hreddit_postrow_detailsdiv">
            <p>{props.postDetails.score}</p>
            <p>{props.postDetails.subreddit_name_prefixed}</p>
            <p>{props.postDetails.num_comments} comments</p>
            <p>u/{props.postDetails.author}</p>
        </div>
    </div>
}