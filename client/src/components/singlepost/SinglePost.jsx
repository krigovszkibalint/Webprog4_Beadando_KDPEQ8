import Image from "../../assets/img/singlepostimg.jpg"
import Sidebar from "../sidebar/Sidebar"
import "./singlepost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={Image} alt="" className="singlePostImage" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Bálint</b>
                    </span>
                    <span className="singlePostDate">
                        1 hour ago
                    </span>
                </div>
                <p className="singlePostDescription">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dicta qui, at temporibus eos numquam repudiandae deleniti, 
                    veniam architecto dolor dignissimos aliquid minus reprehenderit quae enim? Dolorem, obcaecati ipsa. Ea?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dicta qui, at temporibus eos numquam repudiandae deleniti, 
                    veniam architecto dolor dignissimos aliquid minus reprehenderit quae enim? Dolorem, obcaecati ipsa. Ea?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dicta qui, at temporibus eos numquam repudiandae deleniti, 
                    veniam architecto dolor dignissimos aliquid minus reprehenderit quae enim? Dolorem, obcaecati ipsa. Ea?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dicta qui, at temporibus eos numquam repudiandae deleniti, 
                    veniam architecto dolor dignissimos aliquid minus reprehenderit quae enim? Dolorem, obcaecati ipsa. Ea?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dicta qui, at temporibus eos numquam repudiandae deleniti, 
                    veniam architecto dolor dignissimos aliquid minus reprehenderit quae enim? Dolorem, obcaecati ipsa. Ea?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dicta qui, at temporibus eos numquam repudiandae deleniti, 
                    veniam architecto dolor dignissimos aliquid minus reprehenderit quae enim? Dolorem, obcaecati ipsa. Ea?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dicta qui, at temporibus eos numquam repudiandae deleniti, 
                    veniam architecto dolor dignissimos aliquid minus reprehenderit quae enim? Dolorem, obcaecati ipsa. Ea?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dicta qui, at temporibus eos numquam repudiandae deleniti, 
                    veniam architecto dolor dignissimos aliquid minus reprehenderit quae enim? Dolorem, obcaecati ipsa. Ea?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dicta qui, at temporibus eos numquam repudiandae deleniti, 
                    veniam architecto dolor dignissimos aliquid minus reprehenderit quae enim? Dolorem, obcaecati ipsa. Ea?

                </p>
            </div>
        </div>
    )
}
