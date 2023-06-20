import { PortableTextBlock } from "sanity";

export type Hobby = {
  name: string;
  value: string;
};

export type About = {
  _createdAt: Date;
  _id: string;
  alt: string;
  hobbies: Hobby[];
  food: string;
  location: string;
  name: string;
  content: string;
  subtitle: string;
  mainTech: string;
  title: string;
};
