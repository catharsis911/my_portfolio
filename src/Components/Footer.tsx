import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { PiTelegramLogo } from "react-icons/pi"
import { RiInstagramLine } from "react-icons/ri"

function 
Footer() {
  return (
    <div className='footer block'>
      <div className='container max-w-[430px] flex mx-auto my-10 items-center justify-around'>
        <div>
         <a href="https://murenkoforgugl@gmail.com"  target='_blanc'><MdOutlineEmail className="text-[50px] hover:text-violetColor transition-all duration-1000" /></a>
        </div>
        <div>
        <a href='https://t.me/catisdead' target='_blanc'><PiTelegramLogo className="text-[50px] hover:text-violetColor transition-all duration-1000"/></a>
        </div>
        <div>
         <a href='https://www.instagram.com/olyanowave?igsh=Y3p5NHhkaWg0MGds&utm_source=qr'  target='_blanc'><RiInstagramLine className="text-[50px] hover:text-violetColor transition-all duration-1000"/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
