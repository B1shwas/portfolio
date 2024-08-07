export interface NavLink {
  label: string;
  route: string;
}

export interface SocialIcon {
  icon: React.ReactElement;
  href: string;
}

export interface HeadingAndDescriptionProps {
  mainStyle?: string;
  headerStyle?: string;
  descriptionStyle?: string;
  header: string;
  description: string;
  role?: string;
  children?: React.ReactNode;
}

export interface PostDetail {
  date: string;
  about: string;
}

export interface RecentPost {
  id: number;
  header: string;
  description: string;
  details: PostDetail;
}
export interface FeaturedWork {
  id: number;
  imgUrl: string;
  header: string;
  description: string;
  details: PostDetail;
  description2?: string;
  imgUrl2?: string;
  href?: string;
}

export interface TitleProps {
  title: string;
  href: string;
}

export interface Skill {
  icon: React.ReactElement;
  label: string;
}
export interface SkillCategory {
  major: string;
  skills: Skill[];
}

export interface RecentPostCardProps {
  count: number;
  mainStyle?: string;
}
