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
  image: string;
  quote: string;
  typewriter: string[];
  socials: Social[];
  subtitle: string;
  skills: Skill[];
  startTitle: string;
  endTitle: string;
};
