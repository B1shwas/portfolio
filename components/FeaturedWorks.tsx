import { featuredWorks } from "@/constants/works";
import Title from "./Title";
import { FeaturedWork } from "@/constants/types/types";
import Image from "next/image";
import HeadingAndDescription from "./HeadingAndDescription";

const FeaturedWorks: React.FC = () => {
  return (
    <div className="md:px-[120px] py-[28px] flex flex-col items-center md:items-start gap-6 px-5">
      <Title href="/works" title="Featured works" />
      {featuredWorks.slice(0, 3).map((item: FeaturedWork) => {
        return (
          <div className="p-4 border-b-[1px] w-full">
            <div className="flex flex-col md:flex-row gap-5">
              <Image
                src={item.imgUrl}
                alt="Project 1"
                width={246}
                height={180}
                className="rounded-lg max-md:w-full"
              />
              <HeadingAndDescription
                header="Project 1"
                description="This is the best project in my life and i am the best person in the world "
                mainStyle="gap-2 md:gap-3 !items-start"
                headerStyle="text-h5 md:text-h3"
                descriptionStyle="text-start"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedWorks;
