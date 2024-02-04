import React, { Component } from 'react'
import "./Navbar.css"

export default class Navbar extends Component {
  render() {
    return (
     <nav className='brut-ment'>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
     </nav>
    )
  }
}
