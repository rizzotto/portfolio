import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { Introduction } from "@/types/Introduction";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'project']{
        _createdAt,
        _id,
        'image': image.asset->url,
        'slug': slug.current,
        'alt': image.alt,
        content,
        name,
        url,
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'project' && slug.current == $slug][0]{
        _createdAt,
        _id,
        'image': image.asset->url,
        'slug': slug.current,
        'alt': image.alt,
        content,
        name,
        url,
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'page']{
        _createdAt,
        _id,
        'slug': slug.current,
        content,
        title,
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'page' && slug.current == $slug][0]{
        _createdAt,
        _id,
        'slug': slug.current,
        content,
        title,
    }`,
    { slug }
  );
}

export async function getIntroduction(): Promise<Introduction> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'introduction'][0]{
        _createdAt,
        _id,
        'alt': image.alt,
        'image': image.asset->url,
        quote,
        socials,
        subtitle,
        title,
        skills
    }`
  );
}
