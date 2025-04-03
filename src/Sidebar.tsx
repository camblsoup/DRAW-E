
{/* Assets */ }
import sidebar_icon from './assets/sidebar_icon.svg'
import magnifying_glass from './assets/magnifying_glass.svg'
import plus_button from './assets/plus button.svg'
import logo from './assets/logo.svg'

import './sidebar.css'

function Sidebar() {

  function minimize() {
    const sidebar = document.getElementById("sidebar");
    const sizeBox = document.getElementById("size-box");
    if (!sidebar || !sizeBox) {
      return;
    }
    if (sidebar.style.width === "0px") {
      sidebar.style.width = "15vw";
      sidebar.style.minWidth = "200px";
      sizeBox.style.width = "15vw";
      setTimeout(() => {
        sizeBox.style.minWidth = "0";
      }, 500)
    }
    else {
      sizeBox.style.width = sizeBox.offsetWidth + "px"
      sizeBox.style.minWidth = (sizeBox.offsetWidth - 40) + "px"
      sidebar.style.width = "0";
      sidebar.style.minWidth = "0";
    }
  }

  return (
    <nav>
      {/* Minimize Icon */}
      <div id={"minimize-icon"} className="icon-container">
        <img className="icon" src={sidebar_icon} onClick={minimize}  alt={"Toggle sidebar icon"}/>
      </div>
      <div id={"sidebar"} style={{display: "flex",}} className="sidebar">
        <div id={"size-box"}>
          {/* Logo */}
          <img style={{ width: "85%", padding: "15px 0px", }} src={logo}  alt={"Draw-E logo"}/>

          {/* Search Button */}
          <div className="search-bar-container-sidebar ">
            <img className="icon2" src={magnifying_glass}  alt={"Search icon"}/>
            <input className="search-bar-sidebar" type="text" placeholder="Search"></input>
          </div>

          {/* New Project Button*/}
          <label style={{ fontWeight: "700", fontSize: "20px", color: "black"}} htmlFor="new-project-button" className="new-project-label">New Project</label>
          <div id="new-project-button" className="new-project-button">
            <img className="icon2" src={plus_button}  alt={"New project icon"}/>
            New Project
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar