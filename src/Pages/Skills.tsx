
import Footer from '../Components/Footer'
import { IoLogoJavascript } from "react-icons/io"
import { TbFileTypeCss } from "react-icons/tb"
import { IoLogoHtml5 } from "react-icons/io"
import { FaReact } from "react-icons/fa6"
import { SiRedux } from "react-icons/si"
import { SiVite } from "react-icons/si"
import { BsFillBootstrapFill } from "react-icons/bs"
import { SiTailwindcss } from "react-icons/si"
import { FaGithub } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"

function Skills() {
  return (
    <div id='skills' className='block px-2'>
    
      <section className='flex flex-wrap max-w-[730px] justify-between items-center py-20 px-10 mx-auto gap-10'>
        <div id='js' className='w-[300px] flex justify-center py-8 border-[1px] border-[#ededed] rounded-xl shadow-md'>
          <div className='block'>
            <IoLogoJavascript className="text-[50px] mb-3 text-violetColor mx-auto"/>
            <h2 className='text-[20px] mx-auto font-bold'>JavaScript</h2>
          </div>
        
        </div>
        <div id='css' className='w-[300px] flex justify-center py-8 border-[1px] border-[#ededed] rounded-xl shadow-md'>
          <div className='block'>
            <TbFileTypeCss className="text-[50px] mb-3 text-violetColor mx-auto"/>
            <h2 className='text-[20px] mx-auto font-bold'>CSS</h2>
          </div>
        </div>
        <div id='html' className='w-[300px] flex justify-center py-8 border-[1px] border-[#ededed] rounded-xl shadow-md'>
          <div className='block'>
            <IoLogoHtml5 className="text-[50px] mb-3 text-violetColor mx-auto"/>
            <h2 className='text-[20px] mx-auto font-bold'>HTML5</h2>
          </div>
        </div>
        <div id='react' className='w-[300px] flex justify-center py-8 border-[1px] border-[#ededed] rounded-xl shadow-md'>
          <div className='block'>
            <FaReact className="text-[50px] mb-3 text-violetColor mx-auto"/>
            <h2 className='text-[20px] mx-auto font-bold'>React</h2>
          </div>
        </div>
        <div id='redux' className='w-[300px] flex justify-center py-8 border-[1px] border-[#ededed] rounded-xl shadow-md'>
          <div className='block'>
            <SiRedux className="text-[50px] mb-3 text-violetColor mx-auto"/>
            <h2 className='text-[20px] mx-auto font-bold'>Redux</h2>
          </div>
        </div>
        <div id='vite' className='w-[300px] flex justify-center py-8 border-[1px] border-[#ededed] rounded-xl shadow-md'>
          <div className='block'>
            <SiVite className="text-[50px] mb-3 text-violetColor mx-auto"/>
            <h2 className='text-[20px] mx-auto font-bold'>Vite</h2>
          </div>
        </div>
        <div id='bootstrap' className='w-[300px] flex justify-center py-8 border-[1px] border-[#ededed] rounded-xl shadow-md'>
          <div className='block'>
            <BsFillBootstrapFill className="text-[50px] mb-3 text-violetColor mx-auto"/>
            <h2 className='text-[20px] mx-auto font-bold'>BootsTrap</h2>
          </div>
        </div>
        <div id='tailwind' className='w-[300px] flex justify-center py-8 border-[1px] border-[#ededed] rounded-xl shadow-md'>
          <div className='block'>
            <SiTailwindcss className="text-[50px] mb-3 text-violetColor mx-auto"/>
            <h2 className='text-[20px] mx-auto font-bold'>TailWind</h2>
          </div>
        </div>
        <div id='github' className='w-[300px] flex justify-center py-8 border-[1px] border-[#ededed] rounded-xl shadow-md'>
          <div className='block'>
            <FaGithub className="text-[50px] mb-3 text-violetColor mx-auto"/>
            <h2 className='text-[20px] mx-auto font-bold'>GuitHub</h2>
          </div>
        </div>
        <div id='npm' className='w-[300px] flex justify-center py-8 border-[1px] border-[#ededed] rounded-xl shadow-md'>
          <div className='block'>
            <SiTypescript className="text-[50px] mb-3 text-violetColor mx-auto"/>
            <h2 className='text-[20px] mx-auto font-bold'>TypeScript</h2>
          </div>
        </div>
      </section>
     <Footer/>
    </div>
  )
}

export default Skills