import "./settings.css"
import Image from "../../assets/img/xd.JPG"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsProfilePicture">
                        <img src={Image} alt="" />
                        <label htmlFor="fileInput">
                            <i class="writeIcon fas fa-plus"></i>
                            <i class="settingsProfilePictureIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Bálint" />
                    <label>E-mail</label>
                    <input type="email" placeholder="krigovszki.balint@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
