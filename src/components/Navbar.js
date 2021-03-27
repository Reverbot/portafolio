import React from "react"
import { FaAlignRight } from "react-icons/fa"
import { Link } from "gatsby"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <span>DS</span>
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass={"nav-links"} />
      </div>
    </nav>
  )
}

export default Navbar
