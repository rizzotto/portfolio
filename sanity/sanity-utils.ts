import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Introduction } from "@/types/Introduction";
import { Experience } from "@/types/Experience";
import { About } from "@/types/About";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'project'] | order(_createdAt desc){
        _createdAt,
        _id,
        'image': image.asset->url,
        'slug': slug.current,
        'alt': image.alt,
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
        figmaUrl,
        url,
    }`,
    { slug }
  );
}

export async function getExperiences(): Promise<Experience> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'experience'][0]{
        _createdAt,
        _id,
        title,
        subtitle,
        jobs[] {
          ...,
          "logo": logo.asset->url,
          "alt": logo.alt
        }
    }`
  );
}

export async function getAbout(): Promise<About> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'about'][0]{
        ...,
        "locationImage": locationImage.asset->url,
        "alt": locationImage.alt
    }`
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
        skills,
        typewriter,
        email,
        startTitle,
        endTitle
    }`
  );
}
