import React, { useEffect, useState } from "react";
import Container from "/src/Components/Common/Container";
import Flex from "/src/Components/Common/Flex";
import Images from "../Common/Images";
import myPic from "/src/assets/sayeed.jpeg";
import { Cursor, Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";
import Buttons from "../Common/Buttons";
import CountUps from "./CountUps";
import AppsIcon from "../Common/AppsIcon";
import reactImg from "/src/assets/react.svg";
import HtmlImg from "/src/assets/html.png";
import CssImg from "/src/assets/css-3.png";
import JavaScriptImg from "/src/assets/js.png";
import GithubImg from "/src/assets/github.png";
import Vscode from "/src/assets/vsCode.png";
import tailwindImg from "/src/assets/Tailwind.png";
import SkillBar from "./SkillBar";
import FAQ from "./FAQ";
import Contacts from "./Contacts";

const Benner = () => {
  const [start, setstart] = useState(0);
  const [end, setEnd] = useState(100);

  const [open, setOpen] = useState(null);


  return (
    <div>
      <Container>
        <Flex className={` relative`}>
          {/* benner left start */}
          <div className="w-[50%] pl-10 py-10 sticky top-10 h-fit">
            <div className="py-10">
              <Images
                className={`w-60 h-60 rounded-full ring-8 ring-primary/10 border-4 border-bgclr shadow-2x1 shadow-white/5  animate-floating object-cover`}
                src={myPic}
              />
            </div>
            <div className="">
              <h1 className="font-bold text-primary font-sans text-[60px] capitalize ">
                Hi, I'm{" "}
                <span className="text-textMain duration-200 hover:text-textSub">
                  Abu Sayeed{" "}
                </span>
              </h1>
              <h2 className="font-bold text-primary font-sans text-[45px] ">
                <Typewriter
                  loop
                  words={["Frontend Developer", "WordPress"]}
                  cursor
                  cursorStyle="_"
                  typeSpeed={150}
                  delaySpeed={1000}
                  deleteSpeed={60}
                />
              </h2>

              <p className="font-medium text-pText font-DMSans text-[24px] capitalize ">
                I am a frontend developer, I code responsive design using React
                and Figma.
              </p>
              <div className="py-10 flex gap-10">
                <Buttons btntxt={`download my CV`} />
                <Buttons btntxt={`Call Me`} />
              </div>
            </div>
          </div>
          {/* benner left end */}

          {/* benner right start */}
          <div className="w-[50%] flex flex-col gap-15 py-10 px-10">


            {/* About section part start  */}
            <div className=" p-8 bg-bgclr rounded-xl shadow-[0px_0px_10px_rgba(0,0,0,0.4)]">
              <h3 className="font-bold text-primary font-sans text-[35px] text-center pb-1 mb-1.5 border-b-4 border-buttonBg capitalize">
                About Me
              </h3>

              <p className="font-DMSans text-pText text-[16px] text-balance mb-1.5 capitalize">
                I am Abu Sayeed , a passionate Frontend Developer dedicated to
                blending code and creativity to craft exceptional digital
                experiences. Coming from an engineering background, I naturally
                excel at working with structure and logic. I believe a website's
                success lies in its usability and modern design. Driven by this
                philosophy, I have established myself as a developer who
                constantly learns new technologies and transforms them into
                real-world projects.
              </p>

              <p className="font-DMSans text-pText text-[16px] text-balance mb-1.5 capitalize">
                Technically, I am highly proficient in the React.js ecosystem.
                Alongside HTML, CSS, and JavaScript , Tailwind CSS and Bootstrap
                are my primary tools for styling. I specialize in Figma to
                HTML/React conversion, ensuring that even the most complex
                designs are translated into pixel-perfect, responsive code. My
                daily workflow involves building Single Page Applications (SPA)
                with React Router DOM , handling dynamic data through REST API
                integration, and enhancing user interaction using Lottie
                Animations .
              </p>

              <p className="font-DMSans text-pText text-[16px] text-balance mb-1.5 capitalize">
                I am currently honing my skills through an intensive 14-month
                professional training program, which reflects my dedication and
                patience toward mastering my craft. I understand that the world
                of web development is ever-evolving, so staying up-to-date and
                writing clean, maintainable code has become second nature to me.
                I am eager to work with a team where creativity and technical
                expertise are valued. If you are looking to bring your ideas or
                projects to life with a robust and responsive frontend, I am
                ready to give my best to make it happen.
              </p>
            </div>
            {/* About section part end  */}

            {/* Experience section part start  */}
            <div className=" p-8 bg-bgclr rounded-xl shadow-[0px_0px_10px_rgba(0,0,0,0.4)]">
              <h3 className="font-bold text-primary font-sans text-[30px] text-center pb-2.5 capitalize">
                My experience
              </h3>

              <div className=" grid grid-cols-2 gap-x-6 gap-y-6 ">
                <div className=" border-2 border-textMain rounded-[20px] py-2.5 px-4 shadow-[0px_0px_20px_rgba(0,0,0,0.4)]">
                  <h3 className="text-textMain font-bold text-[30px] flex items-center gap-2">
                    <CountUps end={3} speed={500} /> +
                  </h3>
                  <p className=" text-pText font-DMSans font-bold text-6 capitalize ">
                    Project Complete
                  </p>
                </div>

                <div className=" border-2 border-textMain rounded-[20px] py-2.5 px-4 shadow-[0px_0px_20px_rgba(0,0,0,0.4)]">
                  <h3 className="text-textMain font-bold text-[30px] flex items-center gap-2">
                    <CountUps end={1} speed={500} /> Year
                  </h3>
                  <p className=" text-pText font-DMSans font-bold text-6 capitalize ">
                    Experience
                  </p>
                </div>

                <div className=" border-2 border-textMain rounded-[20px] py-2.5  px-4 shadow-[0px_0px_20px_rgba(0,0,0,0.4)]">
                  <h3 className="text-textMain font-bold text-[30px] flex items-center gap-2">
                    <CountUps end={0} speed={500} /> 
                  </h3>
                  <p className=" text-pText font-DMSans font-bold text-6 capitalize ">
                    Happy Client
                  </p>
                </div>
                <div className=" border-2 border-textMain rounded-[20px] py-2.5  px-4 shadow-[0px_0px_20px_rgba(0,0,0,0.4)]">
                  <h3 className="text-textMain font-bold text-[30px] flex items-center gap-2">
                    <CountUps end={7} speed={500} /> Day
                  </h3>
                  <p className=" text-pText font-DMSans font-bold text-6 capitalize ">
                    Free Support After Delivery
                  </p>
                </div>
              </div>
            </div>
            {/* Experience section part end  */}



            {/* Skill Icon section part start  */}
            <div className=" p-8 bg-bgclr rounded-xl shadow-[0px_0px_10px_rgba(0,0,0,0.4)]">
              <div className="w-full border-b-4 border-buttonBg mb-4">
                <h3 className="font-bold text-primary font-sans text-[30px] text-center pb-2.5 capitalize">
                  My Skills
                </h3>
              </div>
              <div className="grid grid-cols-4 gap-x-4 gap-y-8">
                <AppsIcon src={reactImg} />
                <AppsIcon src={HtmlImg} />
                <AppsIcon src={CssImg} />
                <AppsIcon src={JavaScriptImg} />
                <AppsIcon src={GithubImg} />
                <AppsIcon src={Vscode} />
                <AppsIcon src={tailwindImg} />
              </div>
            </div>
            {/* Skill Icon section part end  */}



            {/* Skill Bar section part start  */}
            <div className=" p-8 bg-bgclr rounded-xl shadow-[0px_0px_10px_rgba(0,0,0,0.4)]">
              <div className="w-full border-b-4 border-buttonBg mb-4">
                <h3 className="font-bold text-primary font-sans text-[30px] text-center pb-2.5 capitalize">
                  My Skills
                </h3>
              </div>

              <div className="">
                {/* HTML  */}
                <SkillBar name={"Html"} percent={90} speed={20} className={`h-2.5 bg-orange-500`}/>
                {/* CSS*/}
                <SkillBar name={"Css"} percent={80} speed={20} className={`h-2.5 bg-blue-500`}/>
                {/* JavaScript */}
                <SkillBar name={"JavaScript"} percent={30} speed={20} className={`h-2.5 bg-yellow-500`}/>
                {/* React */}
                <SkillBar name={"React"} percent={20} speed={20} className={`h-2.5 bg-cyan-500`}/>
                 {/* Tailwind */}
                 <SkillBar name={"Tailwind"} percent={70} speed={20} className={`h-2.5 bg-teal-500`}/>
                 {/* Bootstrap */}
                 <SkillBar name={"Bootstrap"} percent={40} speed={20} className={`h-2.5 bg-purple-500`}/>
                 {/* Wordpress  */}
                 <SkillBar name={"Wordpress"} percent={50} speed={20} className={`h-2.5 bg-pink-500`}/>
              </div>
            </div>
            {/* Skill Bar section part end  */}

            {/* FAQ sectiion part start  */}
            <div className="p-8 bg-bgclr ruonded-[12px] shadow-[0_0_10px_0_rgba(0,0,0,0.4)]">
              <h3 className="font-bold text-primary font-sans text-[30px] text-center pb-2.5 capitalize">
                Frequently Asked Questions
              </h3>
              <div className="w-full p-4">
                <FAQ/>
              </div>
            </div>

            {/* FAQ sectiion part end  */}


            {/* Contact section part start  */}
            <div className="p-8 bg-bgclr rounded-[12px] shadow-[0_0_10px_0_rgba(0,0,0,0.4)]">
              <div className=" border-b-4 border-buttonBg mb-2">
                <h3 className="font-bold text-primary font-sans text-[30px] text-center pb-2.5 capitalize">
                Contact Me
              </h3>
              </div>
              <div className="w-full p-4">
                <Contacts/>
              </div>
            </div>
            {/* Contact section part end  */}



          </div>
          {/* benner right end */}
        </Flex>
      </Container>
    </div>
  );
};

export default Benner;
