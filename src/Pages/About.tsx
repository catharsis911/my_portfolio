import React from 'react'


function About() {
  return (
    <div id='about' className='block'>
      <section className='max-w-[930px] container flex flex-wrap-reverse justify-between items-center py-20 mx-auto'>
        
         <h2 className='caption text-[2.6rem] max-w-[26rem] leading-12 font-bold'>Hi! I am Olya,  
          <span className='text-violetColor'> Junior</span> Frontend Developer
         </h2>
         <img src={'img.my.jpg'} className='w-[15rem] h-[15rem] rounded-full'/>
        
      </section>
      <section className='mainInfo bg-greyIsh'>
        <div className='max-w-[930px] mx-auto'>
          <h2 className='text-[30px] leading-12 font-bold'>About</h2>
          <p className='text-[22px] leading-12 font-normal'>curious - hardworking - purposeful</p>
          <p className='text-[18px] leading-7 font-normal'></p>
        </div>
        

      </section>
    </div>
  )
}

export default About