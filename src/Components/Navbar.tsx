
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='header flex justify-center items-center bg-greyIsh h-44 px-2'>
      <div className='container max-w-[930px]'>
        <nav className='menu flex gap-8 justify-end'>
         <Link to="/"><li className='menuList hover:text-violetColor'>About</li></Link>
         <Link to="/skills"><li className='menuList hover:text-violetColor'>Skills</li></Link>
         <Link to="/projects"><li className='menuList hover:text-violetColor'>Projects</li></Link>
         <Link to="/contacts"><li className='menuList hover:text-violetColor'>Contacts</li></Link>
        </nav>
      </div>
      
    </div>
  )
}

export default Navbar