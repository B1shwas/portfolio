import { posts } from "@/constants/posts";
import { RecentPost, RecentPostCardProps } from "@/constants/types/types";
import HeadingAndDescription from "./HeadingAndDescription";

const RecentPostCard: React.FC<RecentPostCardProps> = ({
  count,
  mainStyle,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row cursor-pointer  gap-4 ${mainStyle}`}
    >
      {posts.slice(0, count).map((item: RecentPost) => (
        <div
          key={item.description}
          className={`bg-white p-6 rounded-md ${
            count > 2 ? "border-b-[1px]" : ""
          }`}
        >
          <HeadingAndDescription
            header={item.header}
            description={item.description}
            headerStyle="!text-h6 !md:text-h4 hover:underline "
            mainStyle="!gap-2 !md:gap-3 !items-start"
            descriptionStyle="text-start"
          >
            <div className="flex">
              <p className="border-r-[1px] border-r-black px-4">
                {item.details.date}
              </p>
              <p className="px-4"> {item.details.about}</p>
            </div>
          </HeadingAndDescription>
        </div>
      ))}
    </div>
  );
};

export default RecentPostCard;
