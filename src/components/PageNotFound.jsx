import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='d-flex justify-content-center align-items-center container-not-found'>
        <div>
            <h1 className="display-5 py-4">OOPS!! Page Not Found</h1>
            <div className='d-flex justify-content-center'>
            <Link to={"/"} className="btn btn-light btn-lg">Go To Home</Link> 
            </div>
        </div>
    </div>
  )
}
