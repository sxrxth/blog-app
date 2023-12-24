import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import SinglePost from "./components/SinglePost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Write from "./pages/Write";
import Footer from "./components/Footer";
import EditPost from "./pages/EditPost"
import { tokenAutherizationContext } from "./contexts/tokenAuth";
import { useContext } from "react";


function App() {
  const {isAutherized,setIsAutherized}=useContext(tokenAutherizationContext)

  return (
    <div className="App ">
      <Routes>
        <Route path="/home" element={isAutherized? <Home />:<Login />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/settingss" element={isAutherized? <Settings />:<Login />}></Route>
        <Route path="/write" element= { isAutherized? <Write />:<Login />}></Route>
        <Route path="/singlepost/:id" element={isAutherized?<SinglePost />:<Login />}></Route>
        <Route path="/editpost/:id" element={isAutherized?<EditPost/>:<Login />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
