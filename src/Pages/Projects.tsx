
import Footer from '../Components/Footer'

function Projects() {
  return (
    <div id='projects px-2'>
      <div className='block max-w-[930px] mx-auto'>

      <div className='bg-greyIsh flex justify-start p-8  my-14'>
      <a href='#'  className=' w-[32%]'><img alt='HiConf' src={'hiconf.jpg'}/></a>
         <div className='textSection block ml-10 w-[52%]'>
          <h1 className='md:text-[25px] text-[16px] font-bold'>"HiConf" - scientific conferences website. (In development)</h1>
          <p className='md:text-[15px] text-[12px] leading-7 font-normal'>The “HiConf” website is designed for scientific conferences. It created using the <b>Vite TypeScript</b> and a lot of libraries including <b>React</b>, <b>Tailwind</b>, <b>TanStack React Query</b>, <b>Axios</b>, <b>Jotai</b>, <b>React icons</b>, <b>React router dom</b>. It includes the functionality of user registration and data storage on the server.</p>
         </div>
        
        </div>

       <div className='bg-greyIsh flex justify-start p-8  my-14'>
         <a href='https://catharsis911.github.io/first_portfolio/'  target='_blanc' className='hover:cursor-pointer w-[32%]'><img alt='first portfolio' src={'firstportfolio.PNG'}/></a>
         <div className='textSection block ml-10 w-[52%]'>
          <h1 className='md:text-[30px] text-[21px] font-bold'>My first portfolio</h1>
          <p className='md:text-[18px] text-[15px] leading-7 font-normal'>A portfolio of my projects that I made during the course of the <a href='https://www.freecodecamp.org/learn' className='font-bold hover:text-violetColor'>freeCodeCamp.</a></p>
         </div>
        
        </div>

        <div className='bg-greyIsh flex justify-start p-8  my-14'>
         <a href='https://testproject-eta-sage.vercel.app/'  target='_blanc' className='hover:cursor-pointer w-[32%]'><img alt='MindMatch' src={'mindMatch.jpg'}/></a>
         <div className='textSection block ml-10 w-[52%]'>
          <h1 className='md:text-[30px] text-[21px] font-bold'>Job searching website</h1>
          <p className='md:text-[18px] text-[15px] leading-7 font-normal'>This is my first app created with <b>React</b> using technologies such as <b>components</b>, <b>Router</b>, <b>TailwindCss</b>.</p>
         </div>
        
        </div>

        <div className='bg-greyIsh flex justify-start p-8  my-14'>
         <a href='https://vinyl-project-six.vercel.app/'  target='_blanc' className='hover:cursor-pointer w-[32%]'><img alt='Vinyl Catalog' src={'catalog.jpg'}/></a>
         <div className='textSection block ml-10 w-[52%]'>
          <h1 className='md:text-[30px] text-[21px] font-bold'>Vinyl catalog</h1>
          <p className='md:text-[18px] text-[15px] leading-7 font-normal'>An interactive vinyl catalog created with <b>React</b> using <b>TypeScript</b>.</p>
         </div>
        
        </div>
      </div>
     <Footer/>
    </div>
  )
}

export default Projects