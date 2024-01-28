import { IoIosContacts } from "react-icons/io"
import { CiMail } from "react-icons/ci"
import { CiInstagram } from "react-icons/ci"
import { PiTelegramLogoThin } from "react-icons/pi"
import { FaGithub } from "react-icons/fa"

const Contacts = () => {
  return (
    <div id="contacts" className="block">
      <section className="block  px-2">
       <IoIosContacts className="mt-11 mb-9 md:text-[60px] text-[50px] text-violetColor mx-auto" />
       <h2 className="md:text-[2.6rem] text-[2.2rem] font-bold tracking-tight text-center">CONTACT ME</h2>
       <h3 className="md:text-[1.5rem] text-[1.1rem] mb-11 text-gray-500 tracking-tight text-center">Get in toutch</h3>
      </section>

      <section className="block bg-greyIsh py-11 md:px-2 px-0">

       <div id="mail" className="flex mx-auto md:p-10 p-5 max-w-[730px] border-y-white border-y-[7px] justify-between items-center">
        <div className="md:mr-11 mr-7">
        <CiMail className="md:text-[80px] text-[70px]"/>
        </div>
        <div className="flex justify-between grow">
        <div className="block">
         <h2 className="md:text-[1.5rem] text-[1.3rem] font-bold">Email</h2>
         <h3 className="md:text-[1rem] text-[0.8rem] text-gray-500">murenkoforgugl@gmail.com</h3>
        </div>
        <div>
        <button className="bg-violetColor rounded-lg md:p-3 p-2 md:px-14 px-10 hover:bg-violet-400 transition-all">
            <a href="mailto:murenkoforgugl@gmail.com"  target='_blanc' className="text-white md:text-[1.5rem] text-[1.rem]">Go</a>
          </button>
          </div>
        </div>
       </div>

       <div id="inst" className="flex mx-auto md:p-10 p-5 max-w-[730px] border-y-white border-y-[7px] justify-between items-center mt-4">
        <div className="md:mr-11 mr-7">
        <CiInstagram className="md:text-[80px] text-[70px]"/>
        </div>
        <div className="flex justify-between grow">
        <div className="block">
         <h2 className="md:text-[1.5rem] text-[1.3rem] mt-1  font-bold">Instagram</h2>
         <h3 className="md:text-[1rem] text-[0.8rem]  text-gray-500">@olyanovawe</h3>
        </div>
        <div className="">
          <button className="bg-violetColor rounded-lg md:p-3 p-2 md:px-8 px-6 hover:bg-violet-400 transition-all">
            <a href="https://www.instagram.com/olyanowave?igsh=Y3p5NHhkaWg0MGds&utm_source=qr"  target='_blanc' className="text-white md:text-[1.5rem] text-[1.rem]">DM me</a>
          </button>
        </div>
        </div>
       </div>

       <div id="telegram" className="flex mx-auto md:p-10 p-5 max-w-[730px] border-y-white border-y-[7px] justify-between items-center mt-4">
        <div className="md:mr-11 mr-7">
        <PiTelegramLogoThin className="md:text-[80px] text-[70px]"/>
        </div>
        <div className="flex justify-between grow">
        <div className="block">
         <h2 className="md:text-[1.5rem] text-[1.3rem] mt-1 font-bold">Telegram</h2>
         <h3 className="md:text-[1rem] text-[0.8rem] text-gray-500">@catisdead</h3>
        </div>
        <div className="">
          <button className="bg-violetColor rounded-lg md:p-3 p-2 md:px-6 px-5 hover:bg-violet-400 transition-all">
            <a href="https://t.me/catisdead"  target='_blanc' className="text-white md:text-[1.5rem] text-[1.rem]">Chat me</a>
          </button>
        </div>
        </div>
       </div>

       <div id="github" className="flex mx-auto md:p-10 p-5 max-w-[730px] border-y-white border-y-[7px] justify-between items-center mt-4">
        <div className="md:mr-11 mr-7">
        <FaGithub className="md:text-[80px] text-[70px]"/>
        </div>
        <div className="flex justify-between grow">
        <div className="block">
         <h2 className="md:text-[1.5rem] text-[1.3rem] font-bold">Github</h2>
         <h3 className="md:text-[1rem] text-[0.8rem] text-gray-500">catharsis911</h3>
        </div>
        <div className="">
          <button className="bg-violetColor rounded-lg md:p-3 p-2 md:px-14 px-10 hover:bg-violet-400 transition-all">
            <a href="https://github.com/catharsis911"  target='_blanc' className="text-white md:text-[1.5rem] text-[1.rem]">Go</a>
          </button>
        </div>
        </div>
       </div>

      </section>
    </div>
  )
}

export default Contacts