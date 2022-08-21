import React from 'react'

interface ISideBar{
  children: JSX.Element[] | JSX.Element
}

function SideBar({ children }: ISideBar) {
  return (
    <div id="sidebar">
        {children}
    </div>
  )
}

export default SideBar