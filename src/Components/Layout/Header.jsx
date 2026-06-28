import React from "react";
import Container from "/src/Components/Common/Container";
import Flex from "/src/Components/Common/Flex";

import { Link, useNavigate } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaGithub, FaEdit } from "react-icons/fa";
import Images from "../Common/Images";
import logo from "/src/assets/logo (2).png";
import Buttons from "../Common/Buttons";
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { HiOutlineServer } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import TimeSet from "./TimeSet"


function Header() {

  const navigate= useNavigate();
 const Contactbtn =()=>{
    navigate("/contact")
 }

  return (
    <>
      <div className="bg-headerBg">
        <Container>
          <Flex className={`justify-between py-1.5 items-center`}>
            <div className="flex gap-5 items-center">
              <div className="">
                <TimeSet />
              </div>
              <div className=" font-medium font-Playwrite duration-200 hover:text-textMain">
                <h3>sayeedkhan3372@gmail.com</h3>
              </div>
            </div>

            <div className="flex gap-3">
              <Link className="font-bold p-2 text-[24px] text-primary rounded-full hover:bg-textMain duration-200 ">
                <FaWhatsapp />
              </Link>
              <Link className="font-bold p-2 text-[24px] text-primary rounded-full hover:bg-textMain duration-200 ">
                <FaFacebook />
              </Link>
              <Link to="https://github.com/abusayeeddev" className="font-bold p-2 text-[24px] text-primary rounded-full hover:bg-textMain duration-200 ">
                <FaGithub />
              </Link>
            </div>
          </Flex>
        </Container>
      </div>

      {/* header to section end  */}



      

      {/* header bottom section start  */}
      <div className="">
        <Container className={`bg-white/1 px-2.5 rounded-[30px] border-buttonBg border-2 drop-shadow-md `}>
          <Flex className={`items-center justify-between`}>
            <div className="">
              <Images className={`w-20 mt-2 `} src={logo} />
            </div>
            <div className="">
              <ul className="flex items-center gap-5 ">
                <li className="">
                  <Link to="/" className=" text-[14px] font-medium font-sans flex items-center gap-2.5 bg-buttonBg/50 py-2.5 px-4 rounded-[15px]   hover:bg-menuclr duration-300 border-buttonBg border-3 drop-shadow hover:border-transparent"> 
                      <FaHome/> Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className=" text-[14px] font-medium font-sans flex items-center gap-2.5 bg-buttonBg/50 py-2.5 px-4 rounded-[15px]   hover:bg-menuclr duration-200 border-buttonBg border-3 drop-shadow hover:border-transparent"> <IoIosContact />About</Link>
                </li>
                <li>
                  <Link to="/service" className=" text-[14px] font-medium font-sans flex items-center gap-2.5 bg-buttonBg/50 py-2.5 px-4 rounded-[15px]   hover:bg-menuclr duration-200 border-buttonBg border-3 drop-shadow hover:border-transparent"><HiOutlineServer />Service</Link>
                </li>
                <li>
                  <Link to="/blog" className=" text-[14px] font-medium font-sans flex items-center gap-2.5 bg-buttonBg/50 py-2.5 px-4 rounded-[15px]   hover:bg-menuclr duration-200 border-buttonBg border-3 drop-shadow hover:border-transparent"><FaEdit />Blog</Link>
                </li>
                <li>
                  <Link to="/contact" className=" text-[14px] font-medium font-sans flex items-center gap-2.5 bg-buttonBg/50 py-2.5 px-4 rounded-[15px]   hover:bg-menuclr duration-200 border-buttonBg border-3 drop-shadow hover:border-transparent"><MdEmail />Contact</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <Buttons onClick={Contactbtn } btntxt={`Contact me`}/>
            </div>
          </Flex>
        </Container>
      </div>

      {/* header bottom section end  */}
    </>
  );
}

export default Header;
