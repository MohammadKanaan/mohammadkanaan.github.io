import Image from "next/image";
import React from "react";

export default function ProjectCard({
  src,
  title,
  description,
  children,
}: {
  src: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-64 h-fit p-2 flex flex-col gap-1 justify-center items-center">
      <Image
        src={src}
        alt="project image"
        width={200}
        height={200}
        className="w-full"
      />
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <p className="text-center">{description}</p>
      <div className="flex flex-row gap-2 justify-center">{children}</div>
    </div>
  );
}
