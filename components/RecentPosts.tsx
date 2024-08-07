import { posts } from "@/constants/posts";
import { RecentPost } from "@/constants/types/types";
import HeadingAndDescription from "./HeadingAndDescription";
import Title from "./Title";

const RecentPosts: React.FC = () => {
  return (
    <div className="bg-lightBackground md:px-[120px] py-[28px] flex flex-col items-center md:items-start gap-6 px-5">
      <Title href="/blog" title="Recent posts" />
      <div className="flex flex-col md:flex-row  gap-4 ">
        {posts.slice(0, 2).map((item: RecentPost) => (
          <div key={item.description} className="bg-white p-6 rounded-md">
            <HeadingAndDescription
              header={item.header}
              description={item.description}
              headerStyle="text-h6 md:text-h4"
              mainStyle="gap-2 md:gap-3 !items-start"
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
    </div>
  );
};

export default RecentPosts;
