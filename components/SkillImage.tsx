import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { capitalizeTitle } from "@/lib/utility";

export default function SkillImage({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Image
          src={`/images/${title}.png`}
          alt={title}
          width={48}
          height={48}
          className={className}
        />
        <TooltipContent>
          <p className="text-center">{capitalizeTitle(title)}</p>
        </TooltipContent>
      </TooltipTrigger>
    </Tooltip>
  );
}
