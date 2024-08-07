import FeaturedWorkCard from "@/components/FeaturedWorkCard";

const Works = () => {
  return (
    <div className="md:px-40">
      <h1 className="text-h1 font-bold px-4">Works</h1>
      <FeaturedWorkCard count={30} />
    </div>
  );
};

export default Works;
