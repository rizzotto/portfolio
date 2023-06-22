export type Social = {
  name: string;
  url: string;
};

export type Skill = {
  name: string;
  url: string;
  value: string;
};

export type Introduction = {
  _createdAt: Date;
  _id: string;
  alt: string;
  email: string;
  endTitle: string;
  image: string;
  quote: string;
  skills: Skill[];
  socials: Social[];
  startTitle: string;
  subtitle: string;
  typewriter: string[];
};
