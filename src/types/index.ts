export interface Project {
  id: number;
  title: string;
  desc: string;
  livedemo: string;
  githurl: string;
  mediumlink: string;
  imgUrl: string;
  tech: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: number;
  company: string;
  location: string;
  timeline: string;
  role: string;
  work: string[];
  technologies: string;
}

export interface Education {
  id: string;
  from_to_year: string;
  education: string;
  stream: string;
  info: string;
  institution: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}
