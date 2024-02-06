import { PageInfo } from "@/lib/types";
import { groq } from "next-sanity";
import { client as sanityClient } from "@/sanity/lib/client";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const query = groq`*[_type == 'pageInfo'][0]{
  ...
}`;

export async function getPageInfo(): Promise<PageInfo> {
  const pageInfo: PageInfo = await sanityClient.fetch(query);
  return pageInfo;
}