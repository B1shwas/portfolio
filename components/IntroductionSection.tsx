import React from "react";
import image from "../public/brian.jpeg";
import Image from "next/image";

const IntroductionSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 md:gap-20 p-[31px] md:px-[120px] md:py-[80px] md:flex-row-reverse">
      <Image
        src={image}
        alt="Profile Image"
        className="w-[170px] h-[170px] md:w-[243px] md:h-[243px] rounded-full object-cover"
      />
      <div className="flex flex-col gap-5 md:gap-8 items-center md:items-start">
        <h1 className="text-h2 font-extrabold text-wrap text-center md:text-start">
          Hi, I am Bishwash,<br></br>Frontend Developer
        </h1>
        <p className="text-center md:text-start text-5xs">
          As a frontend developer, I specialize in crafting visually appealing
          and user-friendly web applications. I'm passionate about using modern
          web technologies to create engaging digital experiences.
        </p>
        <a
          className="bg-buttonColor text-white px-[20px] py-[10px] cursor-pointer font-bold w-[210px] text-center"
          href="../public/cv.pdf" download={true}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default IntroductionSection;
