import { IoIosContacts } from "react-icons/io"
import { CiMail } from "react-icons/ci"
import { CiInstagram } from "react-icons/ci"
import { PiTelegramLogoThin } from "react-icons/pi"
import { FaGithub } from "react-icons/fa"

const Contacts = () => {
  return (
    <div id="contacts" className="block">
      <section className="block">
       <IoIosContacts className="mt-11 mb-9 text-[60px] text-violetColor mx-auto" />
       <h2 className="text-[2.6rem] font-bold tracking-tight text-center">CONTACT ME</h2>
       <h3 className="text-[1.5rem] mb-11 text-gray-500 tracking-tight text-center">Get in toutch</h3>
      </section>
      <section className="block bg-greyIsh py-11">
       <div id="mail" className="flex mx-auto p-10 max-w-[730px] border-y-white border-y-[7px] justify-between items-center">
        <div>
        <CiMail className="text-[80px]"/>
        </div>
        <div className="block mr-40">
         <h2 className="text-[1.5rem] mt-1 ml-10 font-bold">Email</h2>
         <h3 className="text-[1rem] ml-10 text-gray-500">murenkoforgugl@gmail.com</h3>
        </div>
        <div className="">
          <button className="bg-violetColor rounded-lg p-3 hover:bg-violet-400 transition-all">
            <a href="https://murenkoforgugl@gmail.com"  target='_blanc' className="text-white text-[1.5rem]">Get started</a>
          </button>
        </div>
       </div>

       <div id="inst" className="flex mx-auto p-10 max-w-[730px] border-y-white border-y-[7px] justify-between items-center mt-4">
        <div>
        <CiInstagram className="text-[80px]"/>
        </div>
        <div className="block mr-40">
         <h2 className="text-[1.5rem] mt-1 ml-10 font-bold">Instagram</h2>
         <h3 className="text-[1rem] ml-10 text-gray-500">@olyanovawe</h3>
        </div>
        <div className="">
          <button className="bg-violetColor rounded-lg py-3 px-8 hover:bg-violet-400 transition-all">
            <a href="https://www.instagram.com/olyanowave?igsh=Y3p5NHhkaWg0MGds&utm_source=qr"  target='_blanc' className="text-white text-[1.5rem]">DM me</a>
          </button>
        </div>
       </div>

       <div id="telegram" className="flex mx-auto p-10 max-w-[730px] border-y-white border-y-[7px] justify-between items-center mt-4">
        <div>
        <PiTelegramLogoThin className="text-[80px]"/>
        </div>
        <div className="block mr-40">
         <h2 className="text-[1.5rem] mt-1 ml-10 font-bold">Telegram</h2>
         <h3 className="text-[1rem] ml-10 text-gray-500">@catisdead</h3>
        </div>
        <div className="">
          <button className="bg-violetColor rounded-lg py-3 px-6 hover:bg-violet-400 transition-all">
            <a href="https://t.me/catisdead"  target='_blanc' className="text-white text-[1.5rem]">Chat me</a>
          </button>
        </div>
       </div>

       <div id="github" className="flex mx-auto p-10 max-w-[730px] border-y-white border-y-[7px] justify-between items-center mt-4">
        <div>
        <FaGithub className="text-[80px]"/>
        </div>
        <div className="block mr-40">
         <h2 className="text-[1.5rem] mt-1 ml-10 font-bold">Github</h2>
         <h3 className="text-[1rem] ml-10 text-gray-500">catharsis911</h3>
        </div>
        <div className="">
          <button className="bg-violetColor rounded-lg py-3 px-14 hover:bg-violet-400 transition-all">
            <a href="https://github.com/catharsis911"  target='_blanc' className="text-white text-[1.5rem]">Go</a>
          </button>
        </div>
       </div>

      </section>
    </div>
  )
}

export default Contacts