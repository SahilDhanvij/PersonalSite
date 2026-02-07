export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
}

export interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface Hobby {
  name: string;
  description: string;
  emoji: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}