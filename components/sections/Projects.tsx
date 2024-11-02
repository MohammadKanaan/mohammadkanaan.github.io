import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProjectCard from "../ProjectCard";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <>
      <h2>My Work</h2>
      <div className="flex flex-row flex-wrap justify-center">
        <ProjectCard
          src="/images/projects/nextspace.png"
          title="NextSpace"
          description="A social media app created with Next.js"
        >
          <Button variant="ghost" asChild>
            <Link
              href="https://next-space-social.vercel.app/"
              className="flex flex-row gap-1 dark:text-white"
            >
              <ArrowUpRight /> Visit
            </Link>
          </Button>
        </ProjectCard>
        <ProjectCard
          src="/images/projects/meals.png"
          title="Meals"
          description="A meals app for a restaurant created with Flutter"
        >
          <Button variant="ghost" asChild>
            <Link
              href="https://github.com/MohammadKanaan/flutter_meals/releases/tag/initial_release"
              className="flex flex-row gap-1 dark:text-white"
            >
              Demo
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link
              href="https://github.com/MohammadKanaan/flutter_meals"
              className="flex flex-row gap-1 dark:text-white"
            >
              Source Code
            </Link>
          </Button>
        </ProjectCard>
      </div>
    </>
  );
}
