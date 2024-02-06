"use server"

import type { Social } from "@/lib/types";
import { client as sanityClient } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = groq`*[_type == 'socials']{
  ... 
}`;

export async function getSocials(): Promise<Social[]> {
  const socials: Social[] = await sanityClient.fetch(query);
  return socials;
}