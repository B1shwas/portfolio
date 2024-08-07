import { socialIcons } from "@/constants/socialIcons";

const FooterSection: React.FC = () => {
  return (
    <footer className="p-4 py-10">
      <div className="flex gap-5 justify-center">
        {socialIcons.map((item) => (
          <a href={item.href} key={item.href} target="blank">
            {item.icon}
          </a>
        ))}
      </div>
      <p className="text-center mt-2 text-[14px]">
        Copyright 2024 All rights reserved
      </p>
    </footer>
  );
};

export default FooterSection;
