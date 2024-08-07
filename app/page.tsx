import FeaturedWorks from "@/components/FeaturedWorks";
import IntroductionSection from "@/components/IntroductionSection";
import RecentPosts from "@/components/RecentPosts";
import SkillsSection from "@/components/SkillsSection";

const Home = () => {
  return (
    <main>
      <IntroductionSection />
      <RecentPosts />
      <SkillsSection />
      <FeaturedWorks />
    </main>
  );
};

export default Home;
