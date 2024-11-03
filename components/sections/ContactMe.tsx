import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ContactMe() {
  return (
    <div className="flex flex-row items-end gap-2 mt-2">
      <p>Come say hi!</p>
      <Link href="https://github.com/MohammadKanaan">
        <Github className="text-black dark:text-white hover:text-primary hover:dark:text-primary" />
      </Link>
      <Link href="https://www.linkedin.com/in/mohammad-kanaan-dev/">
        <Linkedin className="text-black dark:text-white hover:text-primary hover:dark:text-primary" />
      </Link>
    </div>
  );
}
