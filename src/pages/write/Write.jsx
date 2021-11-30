import Image from "../../assets/img/newpostimg.jpg"
import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImage" src={Image}></img>
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="writeIcon fas fa-plus"></i>
                        <i class="writeIcon far fa-image"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" />
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
