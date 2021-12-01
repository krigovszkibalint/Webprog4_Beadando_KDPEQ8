import Image from "../../assets/img/background.jpg"
import "./header.css"

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">Web4 Beadandó</span>
                <span className="headerTitleLarge">Blog</span>
            </div>
            <img src={Image} alt="" className="headerImage" />
        </div>
    )
}

export default Header
