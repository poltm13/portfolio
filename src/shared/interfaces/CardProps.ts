export interface CardProps { 
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  logoSrc?: string;
  id?: string;
  link?: Link;
}

interface Link {
  text: string;
  url: string;
}