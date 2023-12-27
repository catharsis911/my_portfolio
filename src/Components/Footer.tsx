import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { PiTelegramLogo } from "react-icons/pi"
import { RiInstagramLine } from "react-icons/ri"

function 
Footer() {
  return (
    <div className='footer'>
      <div className='container max-w-[930px] flex items-center justify-center'>
        <div>
         <a href=''><MdOutlineEmail className="text-[50px]"/></a>
        </div>
        <div>
        <a href=''><PiTelegramLogo className="text-[50px]"/></a>
        </div>
        <div>
         <a href=''><RiInstagramLine className="text-[50px]"/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
