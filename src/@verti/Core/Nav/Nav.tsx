import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav id="nav">
        <ul>
            <li className="current"><Link to={'/'}>Welcome</Link></li>
            <li>
                <a href="/">Dropdown</a>
                <ul>
                    <li><a href="/">Lorem ipsum dolor</a></li>
                    <li><a href="/">Magna phasellus</a></li>
                    <li>
                        <a href="/">Phasellus consequat</a>
                        <ul>
                            <li><a href="/">Lorem ipsum dolor</a></li>
                            <li><a href="/">Phasellus consequat</a></li>
                            <li><a href="/">Magna phasellus</a></li>
                            <li><a href="/">Etiam dolore nisl</a></li>
                        </ul>
                    </li>
                    <li><a href="/">Veroeros feugiat</a></li>
                </ul>
            </li>
            <li><Link to={'/left-sidebar'}>Left Sidebar</Link></li>
            <li><Link to={'/right-sidebar'}>Right Sidebar</Link></li>
            <li><Link to={'/no-sidebar'}>No Sidebar</Link></li>
        </ul>
    </nav>
  )
}

export default Nav