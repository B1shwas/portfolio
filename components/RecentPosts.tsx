import { posts } from "@/constants/posts";
import { RecentPost } from "@/constants/types/types";
import Link from "next/link";
import HeadingAndDescription from "./HeadingAndDescription";

const RecentPosts: React.FC = () => {
  return (
    <div className="bg-lightBackground md:px-[120px] py-[28px] flex flex-col items-center md:items-start gap-6 px-5">
      <div className="md:flex md:w-full md:justify-between text-center">
        <h3 className="text-6xs md:text-h6">Recent posts</h3>
        <Link href="/blog" className="text-5xs text-lightText underline">
          View all
        </Link>
      </div>
      <div className="flex flex-col md:flex-row  gap-4 ">
        {posts.slice(0, 2).map((item: RecentPost) => (
          <div key={item.description} className="bg-white p-6 rounded-md">
            <HeadingAndDescription
              header={item.header}
              description={item.description}
              headerStyle="text-h6 md:text-h4"
              mainStyle="gap-2 md:gap-3"
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
