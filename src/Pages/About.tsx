
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'


const About = () => {
  return (
    <div id='about' className='block px-2'>
      <section className='max-w-[930px] container flex flex-wrap-reverse sm:justify-between items-center py-20 mx-auto justify-center'>
        
         <h2 className='caption sm:text-[2.6rem] text-[1.8rem] sm:max-w-[26rem] max-w-[16rem] leading-12 font-bold'>Hi! I am Olya,  
          <span className='text-violetColor'> Junior</span> Frontend Developer
         </h2>
         <img src={'img.my.jpg'} className='md:w-[20rem] w-[10rem] md:h-[20rem] h-[10rem] rounded-full'/>
        
      </section>
      <section className='mainInfo bg-greyIsh block'>
        <div className='max-w-[930px] mx-auto py-[2rem]'>
          <h2 className='md:text-[30px] text-[25px] leading-12 font-bold'>About</h2>
          <p className='md:text-[22px] text-[20px] leading-12 font-normal my-[1rem]'>curious - hardworking - purposeful</p>
          <p className='md:text-[18px] text-[16px] leading-7 font-normal my-[1rem]'>I have completed a large and detailed course on web development, which includes sections such as basic layout, JavaScript, and different frameworks. I am currently studying TypeScript.</p>
          <p className='md:text-[18px] text-[16px] leading-7 font-normal my-[1rem]'>Since high school, I have been madly in love with information technology and dreamed of becoming a developer. I can't wait to apply my experience and contribute to the success of the team that likes my portfolio!</p>
          <p className='md:text-[18px] text-[16px] leading-7 font-normal my-[1rem]'>My projects completed during my studies can be watched <Link to="/projects" className='text-violetColor'>here.</Link></p>
        </div>
        

      </section>
      <Footer/>
    </div>
  )
}

export default About