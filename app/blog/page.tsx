import RecentPostCard from "@/components/RecentPostCard";
import React from "react";

const Blog = () => {
  return (
    <div className="md:px-40">
      <h1 className="text-h1 font-bold px-4">Blog</h1>
      <RecentPostCard count={30} mainStyle="!flex-col" />
    </div>
  );
};

export default Blog;
