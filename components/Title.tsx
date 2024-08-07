import { TitleProps } from "@/constants/types/types";
import Link from "next/link";

const Title: React.FC<TitleProps> = ({ title, href }) => {
  return (
    <div className="md:flex md:w-full md:justify-between text-center">
      <h3 className="text-6xs md:text-h6">{title}</h3>
      <Link href={href} className="text-5xs text-lightText underline">
        View all
      </Link>
    </div>
  );
};

export default Title;
