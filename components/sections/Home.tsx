import Link from "next/link";
import React from "react";
import ThemeToggle from "../ThemeToggle";

export default function Home() {
  return (
    <>
      <div className="flex flex-row mb-2 items-center">
        <p>
          <span>Hello, I'm </span>
          <Link
            href="https://www.linkedin.com/in/mohammad-kanaan-dev/"
            className="underline underline-offset-2 font-bold"
          >
            Mohammad Kanaan
          </Link>
          .
        </p>
        <div className="flex-grow" />
        <ThemeToggle />
      </div>
      <p className="mt-[-8px]">
        I'm a motivated Computer Science undergraduate with expertise in
        full-stack web and mobile application development. Proficient in
        Typescript, React.js, Next.js, React Native, Flutter, and Laravel, with
        a proven track record of building production-ready applications.
        <br className="mb-2" />
        <span>I draw great inspiration from the likes of </span>
        <Link
          href="https://leerob.io/"
          className="underline underline-offset-2"
        >
          Lee Robinson
        </Link>
      </p>
    </>
  );
}
