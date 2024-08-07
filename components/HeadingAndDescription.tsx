import { HeadingAndDescriptionProps } from "@/constants/types/types";

const HeadingAndDescription: React.FC<HeadingAndDescriptionProps> = ({
  mainStyle,
  headerStyle,
  descriptionStyle,
  header,
  description,
  role,
  children,
}) => {
  return (
    <div
      className={` flex flex-col gap-5 md:gap-8 items-center md:items-start ${mainStyle}`}
    >
      <h1
        className={`text-h2 font-extrabold text-wrap text-center md:text-start ${headerStyle}`}
      >
        {header}
        <br></br>
        {role}
      </h1>
      {children}
      <p className={`text-center md:text-start text-5xs ${descriptionStyle}`}>
        {description}
      </p>
    </div>
  );
};

export default HeadingAndDescription;
