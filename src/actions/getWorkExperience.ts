"use server"

import type { WorkExperience } from "@/lib/types";
import { client as sanityClient } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = groq`*[_type == 'workExperience']{
  ...,
  tech[]{title, slug}
}`;

export async function getWorkExperiences(): Promise<WorkExperience[]> {
  const workExperiences: WorkExperience[] = await sanityClient.fetch(query);
  return workExperiences;
}