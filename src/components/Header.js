import React from "react"
import Typing from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h2>Web Development and Web Designs!</h2>
                <Typing className="typing-text" 
                strings= {["Web Design", "Web Development", "App Development", "Resume Making"]}
                typeSpeed={60}
                backspeed={60}
                loop
                />
            </div>
        </div>
    )
}

export default Header
