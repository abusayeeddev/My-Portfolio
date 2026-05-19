import React from "react";
import Container from "/src/Components/Common/Container";
import Flex from "/src/Components/Common/Flex";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="border-2 border-primary/10 py-5">
        <Container>
          <Flex className={`justify-between`}>
            <div className="">
              <h3 className="text-pText text-[14px] font-medium font-sans ">
                Built with by Abu Sayeed | Frontend Developer
              </h3>
            </div>
            <div className="">
              <h3 className="text-pText text-[14px] font-medium font-sans text-right">
                @2026 All rights reserved{" "}
              </h3>
            </div>
          </Flex>
        </Container>
      </div>

      <div className="flex gap-3 justify-center py-2">
        
          <Link className="font-bold p-2 text-[24px] text-primary rounded-full hover:bg-textMain duration-200 ">
            <FaWhatsapp />
          </Link>
          <Link className="font-bold p-2 text-[24px] text-primary rounded-full hover:bg-textMain duration-200 ">
            <FaFacebook />
          </Link>
          <Link className="font-bold p-2 text-[24px] text-primary rounded-full hover:bg-textMain duration-200 ">
            <FaGithub />
          </Link>
        
      </div>
    </>
  );
};

export default Footer;
