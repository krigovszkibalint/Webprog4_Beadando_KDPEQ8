import "./navbar.css"

export default function NavBar() {
    return (
        <div className="nav">
            <div className="navLeft">
                <i className="navIcon fab fa-facebook-square"></i>
                <i className="navIcon fab fa-twitter-square"></i>
                <i className="navIcon fab fa-instagram-square"></i>
                <i className="navIcon fab fa-pinterest-square"></i>
                <i className="navIcon fab fa-youtube-square"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem">HOME</li>
                    <li className="navListItem">ABOUT</li>
                    <li className="navListItem">CONTACT</li>
                    <li className="navListItem">WRITE</li>
                    <li className="navListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="navRight">
                <i className="navSearchIcon fas fa-search"></i>
                <img className="navImage" src="xd.jpg" alt=""></img>
            </div>
        </div>
    )
}
