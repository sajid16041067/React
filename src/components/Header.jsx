import React from 'react'
import logo from "../logo-cat.png"

export default function Header() {
  return (
    <div className='header-main'>
        <div className='d-flex justify-content-between px-5'>
            <div className="d-flex header-title text-white p-3">
                <img src={logo} alt="" className='img-logo' />
                <div className='d-flex align-items-center px-2'><h2 className='header-logo-text'>Blog Cat</h2></div>
            </div>
        </div>
    </div>
  )
}
