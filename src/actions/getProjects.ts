"use server"

import { Project } from "@/lib/types";
import { client as sanityClient } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = groq`*[_type == 'projects']{
  ...,
  tech[]{title, slug}
}`;

export async function getProjects(): Promise<Project[]> {
  const projects: Project[] = await sanityClient.fetch(query);
  return projects;
}