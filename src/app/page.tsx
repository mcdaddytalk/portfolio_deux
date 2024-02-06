import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/WorkExperience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { getData } from "@/actions";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { props } = await getData()
  const { projects, socials, workExperiences, skills, pageInfo } = props
  console.log(pageInfo)
  console.log(projects)
  console.log(socials)
  console.log(workExperiences)
  console.log(skills)
  
  return (
    <React.Fragment>
      <Header socials={socials} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero pageInfo={pageInfo} />
        <About pageInfo={pageInfo} />
        <Experience experiences={workExperiences} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}
