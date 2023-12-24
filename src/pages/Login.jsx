import React, { useContext } from "react";
import "./login.css";
import { useState } from "react";
import { loginAPI } from "../services/allAPI";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import { tokenAutherizationContext } from "../contexts/tokenAuth";

function Login() {
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });
  const [insideAuth,setInsideAuth]=useState(true)
  const navigate = useNavigate();

  const {isAutherized,setIsAutherized}=useContext(tokenAutherizationContext)


  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userdata;
    if (!email || !password) {
      alert("Please fill the form completely");
    } else {
      const result = await loginAPI(userdata);
      if (result.status === 200) {
        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(result.data.existingUser)
        );
        sessionStorage.setItem("token", result.data.token);
        setUserdata({
          email: "",
          password: "",
        });
        setIsAutherized(true)
        navigate("/home");
      } else {
        alert(result.response.data);
        console.log(result);
      }
    }
  };

  return (

    <>
    <Topbar insideAuth={insideAuth}/>
      
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input
            onChange={(e) =>
              setUserdata({ ...userdata, email: e.target.value })
            }
            value={userdata.email}
            className="loginInput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            onChange={(e) =>
              setUserdata({ ...userdata, password: e.target.value })
            }
            value={userdata.password}
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
          />
          <button onClick={handleLogin} className="loginButton">
            Login
          </button>
        </form>
      
      </div>
    </>
  );
}

export default Login;
