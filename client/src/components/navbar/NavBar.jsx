import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navbar.css";

export default function NavBar() {
    const {user, dispatch} = useContext(Context);
    const publicFolder = "http://localhost:3001/images/";

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    };

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
                    <li className="navListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="navListItem"><Link className="link" to="/">ABOUT</Link></li>
                    <li className="navListItem"><Link className="link" to="/">CONTACT</Link></li>
                    <li className="navListItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="navListItem" onClick={handleLogout}>
                        <Link className="link" to="/login">{user && 'LOGOUT'}</Link>
                    </li>
                </ul>
            </div>
            <div className="navRight">
                <i className="navSearchIcon fas fa-search"></i>
                {user ? (
                <Link to="/settings">
                    <img className="navImage" src={publicFolder + user.profilePic} alt=""/>
                </Link>
                ) : (
                    <ul className="navList">
                        <li className="navListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="navListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                    )
                }
            </div>
        </div>
    )
}
