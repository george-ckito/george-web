import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav class="navbar">
    <img src="https://i.ibb.co/Tc4zfYH/file.png" width="60" id="logonav"></img>
    <ul class="nav-links">
      <div class="menu">
        <li><a href="/">.home()</a></li>
        <li><a href="/about">About</a></li>
        <li class="services">
          <a href="/">Information</a>
          <ul class="dropdown">
            <li><a href="/">Commands</a></li>
            <li><a href="/">Games</a></li>
            <li><a href="/">Features</a></li>
          </ul>
        </li>
        <li><a href="/">Contact</a></li>
      </div>
    </ul>
  </nav>
  )
}
