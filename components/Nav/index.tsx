import React from "react";
import NavMenuButton from "./NavMenuButton";
import ThemeToggle from "../ThemeToggle";
export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex space-x-4">
        <NavMenuButton title="home" />
        <NavMenuButton title="skills" />
        <NavMenuButton title="projects" />
      </div>
      <ThemeToggle />
    </nav>
  );
}
