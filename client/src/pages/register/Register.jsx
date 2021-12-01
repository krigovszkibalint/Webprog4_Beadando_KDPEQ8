import { Link } from "react-router-dom"
import "./register.css"

export default function Login() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Username" />
                <label>E-mail</label>
                <input className="registerInput" type="text" placeholder="E-mail" />
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Password" />
                <button className="registerButton">Register</button>
            </form>
            <hr />
            <button className="registerLoginButton">
                <Link className="link" to="/login">Login</Link>
            </button>
        </div>
    )
}
