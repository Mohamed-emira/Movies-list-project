import React from 'react'
import './Navbar.css'
import logo from '../images/logo.png'

export default function Navbar({search}) {
  const onSearch=(word)=>{
    search(word)
  }
  return (
    <div className='Navbar'>
      <div className='Navbar-body'>
      <img src={logo} alt=''/>
      <i className="fa fa-search"></i>
      <input onChange={(e)=>onSearch(e.target.value)} type='text' placeholder='ابحث'/>
      </div>
      
    </div>
  )
}
