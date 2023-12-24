import React from "react";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";
import Header from "../components/Header";
import "./home.css";
import Topbar from "../components/Topbar";
function Home() {
  return (
    <>
      <Topbar />
      <Header/>

      <div className="home">
        <Posts />
        {/* <Sidebar /> */}
      </div>
    </>
  );
}

export default Home;
