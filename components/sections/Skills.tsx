import React from "react";
import { TooltipProvider } from "../ui/tooltip";
import SkillImage from "../SkillImage";

export default function Skills() {
  return (
    <>
      <h2>Skills</h2>
      <TooltipProvider>
        <div className="flex flex-row flex-wrap gap-2 mt-2">
          <SkillImage title="nextjs" className="invert dark:invert-0" />
          <SkillImage title="typescript" />
          <SkillImage title="react" />
          <SkillImage title="react native" />
          <SkillImage title="flutter" />
          <SkillImage title="laravel" />
          <SkillImage title="fast api" />
          <SkillImage title="python" />
          <br />
          • Languages: JavaScript, Typscript, Python, Java, PHP, Dart Web
          <br />
          • Technologies: React, Next.js, Node.js, HTML, CSS, Tailwind CSS,
          Redux, FastAPI
          <br />
          • Mobile Development: Flutter, React Native, Expo
          <br />
          • DevOps Tools: Docker
          <br />
          • Database Systems: MySQL, MongoDB, PostgreSQL
          <br />• Soft Skills: Leadership, Communication, Problem-solving, Team
          Collaboration
        </div>
      </TooltipProvider>
    </>
  );
}
