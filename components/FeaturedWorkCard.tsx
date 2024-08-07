import { FeaturedWork, RecentPostCardProps } from "@/constants/types/types";
import { featuredWorks } from "@/constants/works";
import Image from "next/image";
import HeadingAndDescription from "./HeadingAndDescription";
import Link from "next/link";

const FeaturedWorkCard: React.FC<RecentPostCardProps> = ({ count }) => {
  return (
    <>
      {featuredWorks.slice(0, count).map((item: FeaturedWork) => {
        return (
          <Link href={`/works/${item.id}`}>
            <div
              className="p-4 border-b-[1px] w-full cursor-pointer"
              key={item.id}
            >
              <div className="flex flex-col md:flex-row gap-5">
                <Image
                  src={item.imgUrl}
                  alt="Project 1"
                  width={246}
                  height={180}
                  className="rounded-lg max-md:w-full"
                />
                <HeadingAndDescription
                  header={item.header}
                  description={item.description}
                  mainStyle="!gap-2 !md:gap-3 !items-start"
                  headerStyle="!text-h5 !md:text-h3 hover:underline"
                  descriptionStyle="text-start"
                >
                  <div className="flex gap-4">
                    <span className="bg-primaryText rounded-3xl text-white px-4">
                      {item.details.date.split("-")[0]}
                    </span>
                    <p className="text-lightText">{item.details.about}</p>
                  </div>
                </HeadingAndDescription>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default FeaturedWorkCard;
