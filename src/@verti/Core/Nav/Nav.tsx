import React from 'react'

function Nav() {
  return (
    <nav id="nav">
        <ul>
            <li className="current"><a href="index.html">Welcome</a></li>
            <li>
                <a href="void()">Dropdown</a>
                <ul>
                    <li><a href="void()">Lorem ipsum dolor</a></li>
                    <li><a href="void()">Magna phasellus</a></li>
                    <li>
                        <a href="void()">Phasellus consequat</a>
                        <ul>
                            <li><a href="void()">Lorem ipsum dolor</a></li>
                            <li><a href="void()">Phasellus consequat</a></li>
                            <li><a href="void()">Magna phasellus</a></li>
                            <li><a href="void()">Etiam dolore nisl</a></li>
                        </ul>
                    </li>
                    <li><a href="void()">Veroeros feugiat</a></li>
                </ul>
            </li>
            <li><a href="left-sidebar.html">Left Sidebar</a></li>
            <li><a href="right-sidebar.html">Right Sidebar</a></li>
            <li><a href="no-sidebar.html">No Sidebar</a></li>
        </ul>
    </nav>
  )
}

export default Nav