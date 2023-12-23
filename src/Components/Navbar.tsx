import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='header flex justify-center items-center bg-greyIsh h-44'>
      <div className='container w-[50%]'>
        <nav className='menu flex gap-8 justify-end'>
         <Link to="/"><li>About</li></Link>
         <Link to="/skills"><li>Skills</li></Link>
         <Link to="/projects"><li>Projects</li></Link>
         <Link to="/contacts"><li>Contacts</li></Link>
        </nav>
      </div>
      
    </div>
  )
}

export default Navbar