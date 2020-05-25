import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <h1>Mediavil</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/products/">Products</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
