import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Navigating Worlds Through Words.</span>
        <span className="headerTitleLg">INSIGHT</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1538947151057-dfe933d688d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  )
}

export default Header