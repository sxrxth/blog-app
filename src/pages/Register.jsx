import React from "react";
import "./register.css";
import { registerAPI } from "../services/allAPI";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";

function Register() {
  const [userdata, setUserdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const [insideAuth,setInsideAuth]=useState(true)

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userdata;
    if (!username || !email || !password) {
      alert("Please fill the form completely");
    } else {
      const result = await registerAPI(userdata);
      if (result.status === 200) {
        alert(`${username} has registered successfully`);
        navigate('/')
        setUserdata({
          username: "",
          email: "",
          password: "",
        });
      } else {
        alert(result.response.data);
        console.log(result);
      }
    }
  };
  return (
   <>
   <Topbar insideAuth={insideAuth} />
      
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input
            value={userdata.username}
            onChange={(e) =>
              setUserdata({ ...userdata, username: e.target.value })
            }
            className="registerInput"
            type="text"
            placeholder="Enter your username..."
          />
          <label>Email</label>
          <input
            onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
            value={userdata.email}
            className="registerInput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            onChange={(e) =>
              setUserdata({ ...userdata, password: e.target.value })
            }
            value={userdata.password}
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
          />
          <button onClick={handleRegister} className="registerButton">
            Register
          </button>
        </form>
      </div>
   </>
  );
}

export default Register;
