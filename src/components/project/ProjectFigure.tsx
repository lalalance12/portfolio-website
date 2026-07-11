import Image from "next/image";
import ParallaxImage from "@/components/ParallaxImage";
import type { ProjectImage } from "@/data/projects";

export default function ProjectFigure({
  image,
  priority = false,
}: {
  image: ProjectImage;
  priority?: boolean;
}) {
  return (
    <figure>
      <ParallaxImage
        strength={6}
        className="rounded-2xl border border-hairline bg-paper-raised"
      >
        <Image
          src={image.src}
          alt={image.caption}
          width={1600}
          height={1000}
          priority={priority}
          className="h-auto w-full"
          sizes="(min-width: 1024px) 896px, 100vw"
        />
      </ParallaxImage>
      <figcaption className="mt-3 text-sm text-muted">
        {image.caption}
      </figcaption>
    </figure>
  );
}
