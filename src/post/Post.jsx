import Image from "../assets/img/postimg.jpg"
import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img src={Image} alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">Music</span>
                    <span className="postCategory">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDescription">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A esse accusamus non hic eligendi quia quisquam architecto voluptates impedit fugiat voluptatum in assumenda ipsum inventore, illum porro magni vero.
                 Ducimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae officia nesciunt itaque omnis cupiditate ab asperiores maiores ipsa aliquam iusto provident adipisci, voluptates magnam. Animi quam eum veniam enim quae.
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. A esse accusamus non hic eligendi quia quisquam architecto voluptates impedit fugiat voluptatum in assumenda ipsum inventore, illum porro magni vero.
                 Ducimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae officia nesciunt itaque omnis cupiditate ab asperiores maiores ipsa aliquam iusto provident adipisci, voluptates magnam. Animi quam eum veniam enim quae.
                </p>
        </div>
    )
}
