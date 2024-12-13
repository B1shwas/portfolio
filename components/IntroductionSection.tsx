import React from "react";
import image from "@/public/profile.jpg";
import Image from "next/image";
import HeadingAndDescription from "./HeadingAndDescription";

const IntroductionSection: React.FC = () => {
  const header = "Hi, I am Bishwash,";
  const role = "Fullstack Developer";
  const description =
    "As a full-stack developer, I specialize in building robust and scalable web applications. I am passionate about leveraging both front-end and back-end technologies to create seamless and dynamic user experiences. My expertise lies in integrating various systems and optimizing performance to ensure smooth functionality across all devices.";
  return (
    <div className="flex flex-col justify-center items-center gap-8 md:gap-20 p-[31px] md:px-[120px] md:py-[80px] md:flex-row-reverse">
      <Image
        src={image}
        alt="Profile Image"
        className="w-[170px] h-[170px] md:w-[243px] md:h-[243px] rounded-full object-cover"
      />
      <div className="flex flex-col">
        <HeadingAndDescription
          header={header}
          description={description}
          role={role}
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
