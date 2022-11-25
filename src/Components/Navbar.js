import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { setView } from '../Slice/appSlice'

import "./styles/navbar.css"

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false)

  const navItems = ["Home", "TheJourney", "Team", "Store", "Contact"]

  const view = useSelector(state => state.appSlice.view);

  const dispatch = useDispatch();

  return (
    <div className='nav-cnt'>
      <div className={toggleNav ? `nav-2 bs open-nav` : "nav-2 "}>
        <ul className='nav-2-items'>
          <li onClick={()=>setToggleNav(false)} className="nav-item">
          <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
          </li>
          {navItems.map((item) => {
            return <li className={view === item ? `nav-item fw-b active-nav-2` : 'nav-item'} onClick={() => { dispatch(setView(item));setToggleNav(false) }}>{item === "TheJourney" ? "The Journey" : item}</li>
          })}
        </ul>
      </div>
      <svg onClick={() => setToggleNav(true)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="menuicon" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      </svg>
      <img src={`./assets/websitelogo.png`} onClick={()=>dispatch(setView("Home"))} id="websitelogo" alt="" />
      <ul className='nav-items'>
        {navItems.map((item) => {
          return <li className={view === item ? `nav-item fw-b active-nav` : 'nav-item'} onClick={() => { dispatch(setView(item)) }}>{item === "TheJourney" ? "The Journey" : item}</li>
        })}
      </ul>
      <div className="profile-cnt">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" id='accounticon' viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
        </svg>
        <div id="username">Bhupendra</div>
      </div>
    </div>
  )
}
