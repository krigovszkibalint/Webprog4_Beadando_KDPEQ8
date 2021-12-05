import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router"
import { Link } from "react-router-dom";
import Image from "../../assets/img/singlepostimg.jpg"
import { Context } from "../../context/Context";
import Sidebar from "../sidebar/Sidebar"
import "./singlepost.css"

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const { user } = useContext(Context);
    const publicFolder = "http://localhost:3001/images/";
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("/posts/"+path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    },[path]);

    const handleDelete = async() => {
        try {
            await axios.delete("/posts/" + path, {data:{username:user.username}});
            window.location.replace("/");
        } catch (err) {
            
        }
    };
    const handleUpdate = async() => {
        try {
            await axios.put("/posts/" + path,{
                username: user.username, title, desc
            });
            window.location.reload();
        } catch (err) {

        }
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                <img src={publicFolder + post.photo}
                alt=""
                className="singlePostImage" />
                )}
                {updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)} /> : (

                    <h1 className="singlePostTitle">
                    {post.title}
                    {post.username === user?.username &&
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                    </div>
                    }
                </h1>
                )}
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author:<span>&nbsp;</span> 
                        <Link className="link" to={`/?user=${post.username}`}>
                        <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">
                        {new Date(post.createdAt).toLocaleString()}
                    </span>
                </div>
                {updateMode ? (<textarea className="singlePostDescriptionInput" value={desc} onChange={(e)=>setDesc(e.target.value)} />) : (
                    <p className="singlePostDescription">{post.desc}</p>
                    )}
                <div className="singlePostUpdateButtons">
                {updateMode ? (
                    <button className="singlePostButton" onClick={()=>setUpdateMode(false)}>Cancel</button>
                ):(<br/>)}
                {updateMode ? (
                    <button className="singlePostButton" onClick={handleUpdate}>Update</button>
                ):(<p/>)}
                </div>
            </div>
        </div>
    )
}
