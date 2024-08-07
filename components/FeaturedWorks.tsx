import Title from "./Title";
import FeaturedWorkCard from "./FeaturedWorkCard";

const FeaturedWorks: React.FC = () => {
  return (
    <div className="md:px-[120px] py-[28px] flex flex-col items-center md:items-start gap-6 px-5">
      <Title href="/works" title="Featured works" />
      <FeaturedWorkCard count={3} />
    </div>
  );
};

export default FeaturedWorks;
