
import {Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contacts from './Pages/Contacts'

function App() {

  return (
    <>
     <div className='w-[100%] m-auto bg-white'>
      <Navbar/>
      <Routes>
       <Route path='/' element={ <About/> }/>
       <Route path='/skills' element={ <Skills/> }/>
       <Route path='/projects' element={ <Projects/> }/>
       <Route path='/contacts' element={ <Contacts/> }/>
      </Routes>
     </div> 
    </>
  )
}

export default App
