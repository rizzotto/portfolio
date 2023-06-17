import { PortableTextBlock } from "sanity";

export type Page = {
  _createdAt: Date;
  _id: string;
  content: PortableTextBlock[];
  slug: string;
  title: string;
};
