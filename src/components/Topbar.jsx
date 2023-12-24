import React, { useContext } from 'react';
import './topbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { tokenAutherizationContext } from '../contexts/tokenAuth';

function Topbar({ insideAuth }) {
  var user = true;
  const navigate = useNavigate();
  const {isAutherized,setIsAutherized}=useContext(tokenAutherizationContext)
  const handleLogout = () => {
    sessionStorage.removeItem("existingUser");
    sessionStorage.removeItem("token");
    setIsAutherized(false)
    user=false
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ height: '60px' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
        <h3 className='mt-2 ms-5 me-5'>INSIGHT</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center align-items-center " style={{marginLeft:"140px"}} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fs-5 " to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="#">
                About
              </Link>
            </li>
            <li className="nav-item fs-5">
              <Link className="nav-link" to="#">
                Contact
              </Link>
            </li>
            <li className="nav-item fs-5">
              <Link className="nav-link" to="/write">
                Write
              </Link>
            </li>
            {user && (
              <li className="nav-item fs-5">
                <button
                  className="nav-link btn btn-link fs-5"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
              
            )}


          </ul>
          
        </div>
        
      </div>
      <div className="d-flex">
          <div className="topLeft ms-5">
            <i className="topIcon fab fa-facebook-square me-3"></i>
            <i className="topIcon fab fa-instagram-square me-3"></i>
            <i className="topIcon fab fa-pinterest-square me-3"></i>
            <i className="topIcon fab fa-twitter-square me-3 "></i>
          </div>
            <Link className="btn  border-0" to="/settingss">
              <i className="fa-solid fa-user me-2"></i>
              Profile
            </Link>
            {insideAuth && (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            )}
           
          </div>
    </nav>
  );
}

export default Topbar;
