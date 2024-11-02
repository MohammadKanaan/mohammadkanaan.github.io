"use client";

import Nav from "@/components/Nav";
import ContactMe from "@/components/sections/ContactMe";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Portfolio() {
  return (
    <div className="w-full sm:max-w-xl">
      <main className="container mx-auto px-4 py-8 ">
        <section id="home" className="mb-8">
          <Home />
          <ContactMe />
        </section>
        <hr className="border border-stone-500 my-6" />
        <section id="skills">
          <Skills />
        </section>
        <hr className="border border-stone-500 my-6" />
        <section id="projects">
          <Projects />
        </section>
      </main>
    </div>
  );
}
