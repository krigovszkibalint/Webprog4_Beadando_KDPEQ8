import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>E-mail</label>
                <input className="loginInput" type="text" placeholder="E-mail" />
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Password" />
                <button className="loginButton">Login</button>
            </form>
            <hr />
            <button className="loginRegisterButton">Register</button>
        </div>
    )
}
