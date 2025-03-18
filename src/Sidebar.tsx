import { useState } from 'react'


{/* Assets */ }
import sidebar_icon from './assets/sidebar_icon.svg'
import magnifying_glass from './assets/magnifying_glass.svg'
import plus_button from './assets/plus button.svg'
import logo from './assets/logo.svg'

import './sidebar.css'

function Sidebar() {

  return (
    <nav>
      <div className="sidebar">

        {/* Minimize Icon */}
        <div className="icon-container">
          <img className="icon" src={sidebar_icon} />
        </div>

        {/* Logo */}
        <img style={{ width: "85%", padding: "15px 0px", }} src={logo} />

        {/* Search Button */}
        <div className="search-bar-container">
          <img className="icon2" src={magnifying_glass} />
          <input className="search-bar" type="text" placeholder="Search"></input>
        </div>

        {/* New Project Button*/}
        <label style={{ fontWeight: "700", fontSize: "20px", }} htmlFor="new-project-button" className="new-project-label">New Project</label>
        <div id="new-project-button" className="new-project-button">
          <img className="icon2" src={plus_button} />
          New Project
        </div>
      </div>
    </nav>
  )
}

export default Sidebar