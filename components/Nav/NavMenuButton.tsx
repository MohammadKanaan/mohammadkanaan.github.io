import { scrollToSection } from "@/lib/hooks";
import { capitalizeTitle } from "@/lib/utility";
import React from "react";

export default function NavMenuButton({ title }: { title: string }) {
  return (
    <button onClick={() => scrollToSection(title)} className="hover:underline">
      {capitalizeTitle(title)}
    </button>
  );
}
