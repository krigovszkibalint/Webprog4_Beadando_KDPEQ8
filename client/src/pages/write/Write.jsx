import { useContext, useEffect, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState("");
    const { user } = useContext(Context);

    
    useEffect(()=>{
        const getCategories = async () =>
        {
            const res = await axios.get("/categories");
            setCategories(res.data);
        }
        getCategories();
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            categories
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) { }
    };
    return (
        <div className="write">
            <div className="writeWrapper">
            {file && (
                <img className="writeImage" src={URL.createObjectURL(file)} alt="" />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="writeIcon fas fa-plus"></i>
                        <i class="writeIcon far fa-image"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e => setTitle(e.target.value)}/>
                    <input type="text" placeholder="Category" className="writeInputCategory" onChange={e => setCategories(e.target.value)}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" onChange={e => setDesc(e.target.value)}></textarea>
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
            </div>
            <Sidebar />
        </div>
        
    );
}