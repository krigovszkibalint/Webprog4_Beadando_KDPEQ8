import axios from "axios";
import { useEffect, useState } from "react"
import Image from "../../assets/img/sidebar.jpg"
import "./sidebar.css"

export default function Sidebar() {
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        const getCategories = async () =>
        {
            const res = await axios.get("/categories");
            setCategories(res.data);
        }
        getCategories();
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={Image} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, consectetur ad? Doloremque, incidunt.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {categories.map((c)=> (
                        <li className="sidebarListItem">{c.name}</li>
                    ))}
                </ul>
            </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                        <i className="sidebarIcon fab fa-twitter-square"></i>
                        <i className="sidebarIcon fab fa-instagram-square"></i>
                        <i className="sidebarIcon fab fa-pinterest-square"></i>
                        <i className="sidebarIcon fab fa-youtube-square"></i>
                    </div>
                </div>
        </div>
    )
}
