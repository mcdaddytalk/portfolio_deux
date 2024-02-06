import type { Skill } from "@/lib/types";
import { client as sanityClient } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = groq`*[_type == 'skills']{
  ... 
}`;
export async function getSkills(): Promise<Skill[]> {
  const skills: Skill[] = await sanityClient.fetch(query);
  return skills;
}