import { Link } from "react-router-dom";
import './post.css'

export default function Post({post}) {
    const publicFolder = "http://localhost:3001/images/";

    return (
        <div className="post">
            {post.photo && ( 
                <Link className="link" to={`/post/${post._id}`}>
            <img 
            className="postImg"
            src={publicFolder + post.photo}
            alt=""/>
            </Link>
            )}
            <div className="postInfo">
                <div className="postCategories">
                    {
                        post.categories.map((c) =>(
                            <span className="postCategory">{c.name}</span>
                        ))
                    }
                </div>
                <Link className="link" to={`/post/${post._id}`}>
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toLocaleString()}</span>
            </div>
            <p className="postDescription">
                {post.desc}    
            </p>
        </div>
    )
}
