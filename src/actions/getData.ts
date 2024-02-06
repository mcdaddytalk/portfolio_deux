"use server"

import { getProjects, getSocials, getWorkExperiences, getSkills, getPageInfo } from ".";

export async function getData() {
    return {
      props: {
        projects: await getProjects(),
        socials: await getSocials(),
        workExperiences: await getWorkExperiences(),
        skills: await getSkills(),
        pageInfo: await getPageInfo(),
      },
      revalidate: 10,
    };
  }