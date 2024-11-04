export default function PostRow(props) {

    return <div className="hreddit_postrow" onClick={() => props.openPostProp(props.postDetails.permalink)}>
        <div className="hreddit_postrow_titleandpreview">

        {props.postDetails.thumbnail === "default" || props.postDetails.thumbnail === "self" || /external-preview/.test(props.postDetails.thumbnail)
        ? <img id="hreddit_postrow_thumbnaildefault" alt="placeholder reddit logo" src="./reddit_icon.png" height={140} width={140}></img>
        : <img className="hreddit_postlist_post_image" src={props.postDetails.thumbnail} height={props.postDetails.thumbnail_height} width={props.postDetails.thumbnail_width}></img> 
        }

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