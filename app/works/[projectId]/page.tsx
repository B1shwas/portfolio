"use client";
import { FeaturedWork } from "@/constants/types/types";
import { featuredWorks } from "@/constants/works";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProjectPage = () => {
  const { projectId } = useParams();

  const isAvailable = featuredWorks.find(
    (item: FeaturedWork) => item.id.toString() === projectId
  );

  const item = featuredWorks.filter(
    (item: FeaturedWork) => item.id.toString() === projectId
  )[0];

  return (
    // Use the ternary operator directly within the JSX
    isAvailable ? (
      <div className="md:px-[120px] py-[28px] flex flex-col items-center md:items-start gap-6 px-5">
        <h1 className="text-h3 md:text-h2 font-bold">{item.header}</h1>
        <div className="flex gap-4">
          <span className="bg-primaryText rounded-3xl text-white px-1 md:px-4">
            {item.details.date.split("-")[0]}
          </span>
          <p className="text-lightText">{item.details.about}</p>
        </div>
        {item.href && (
          <a
            className="text-lightText underline"
            href={item.href}
            target="blank"
          >
            Visit the website
          </a>
        )}
        <p>{item.description}</p>
        <Image
          src={item.imgUrl}
          alt="Project"
          height={480}
          width={500}
          className="w-full"
        />
        <p>{item.description2}</p>
        {item.imgUrl2 && (
          <Image
            src={item.imgUrl2}
            alt="Project"
            height={480}
            width={500}
            className="w-full"
          />
        )}
      </div>
    ) : (
      <div className="text-buttonColor flex flex-col justify-center items-center h-[70vh]">
        <h1 className="text-h1 font-bold">404</h1>
        <p>Page Not Found</p>
      </div>
    )
  );
};

export default ProjectPage;
