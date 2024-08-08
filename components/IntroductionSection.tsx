import React from "react";
import image from "@/public/profile.jpg";
import Image from "next/image";
import HeadingAndDescription from "./HeadingAndDescription";

const IntroductionSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 md:gap-20 p-[31px] md:px-[120px] md:py-[80px] md:flex-row-reverse">
      <Image
        src={image}
        alt="Profile Image"
        className="w-[170px] h-[170px] md:w-[243px] md:h-[243px] rounded-full object-cover"
      />
      <div className="flex flex-col">
        <HeadingAndDescription
          header="Hi, I am Bishwash,"
          description="As a frontend developer, I specialize in crafting visually appealing
            and user-friendly web applications. I'm passionate about using
            modern web technologies to create engaging digital experiences."
          role="Frontend Developer"
        />
        <a
          className="bg-buttonColor text-white px-[40px] py-[10px] font-bold mt-5   md:mt-8 self-center md:self-start "
          href="/bishwash-deoju.png"
          download="cv(bishwash-deoju).png"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default IntroductionSection;
