import { PortableTextBlock } from "sanity";

export type Project = {
  _createdAt: Date;
  _id: string;
  alt: string;
  content: PortableTextBlock[];
  figmaUrl: string;
  image: string;
  name: string;
  slug: string;
  url: string;
};
