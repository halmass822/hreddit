export default function PostRow(props) {

    return <div className="hreddit_postrow">
        <h4>{props.postDetails.title}</h4>
        <div className="hreddit_postrow_detailsdiv">
            <p>{props.postDetails.score}</p>
            <p>{props.postDetails.subreddit_name_prefixed}</p>
            <p>{props.postDetails.num_comments} comments</p>
            <p>{props.postDetails.author}</p>
        </div>
    </div>
}