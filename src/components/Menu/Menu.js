import React from 'react'
import "./Menu.css"
import close from "../../assets/close.svg"
import MenuContents from './MenuContents'

export default function Menu({setMenuOpen}) {

  return (
    <div className='menu-container'>
      <div className='menu-wrap'>
        <img src={close} alt='close menu' onClick={() => setMenuOpen(false)}/>
        <MenuContents setMenuOpen={setMenuOpen}/>
      </div>
    </div>
  )
}
