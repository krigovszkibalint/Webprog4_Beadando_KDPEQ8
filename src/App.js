import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/register" element={user ? <Home/> :<Register/>}/>
      <Route path="/login" element={user ? <Home/> :<Login/>}/>
      <Route path="/write" element={user ? <Write/> :<Login/>}/>
      <Route path="/settings" element={user ? <Settings/> :<Login/>}/>
      <Route path="/post/:postId" element={<Single/>}/>
    </Routes>
    </Router>
  );
}

export default App;
