import Image from "../../assets/img/sidebar.jpg"
import "./sidebar.css"

export default function Sidebar() {
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
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Gaming</li>
                    <li className="sidebarListItem">Art</li>
                    <li className="sidebarListItem">Movies</li>
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
