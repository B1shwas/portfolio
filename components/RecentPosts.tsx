import Title from "./Title";
import RecentPostCard from "./RecentPostCard";

const RecentPosts: React.FC = () => {
  return (
    <div className="bg-lightBackground md:px-[120px] py-[28px] flex flex-col items-center md:items-start gap-6 px-5">
      <Title href="/blog" title="Recent posts" />
      <RecentPostCard count={2} />
    </div>
  );
};

export default RecentPosts;
