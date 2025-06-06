import clsx from "clsx";
import type React from "react";
import { type ProjectType } from "@/lib/types";
import { Button } from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Autoplay from "embla-carousel-autoplay";
import { useMemo, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

export default function Project({
  project,
  className,
  index,
  ...props
}: React.ComponentProps<"div"> & { project: ProjectType; index: number }) {
  const isEven: boolean = useMemo(() => index % 2 === 0, [index]);
  const plugin = useRef(
    Autoplay({
      delay: Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000,
    }),
  );

  return (
    <div
      className={clsx(
        "flex w-[80rem] gap-x-[5rem] gap-y-10 px-10 py-10",
        isEven ? "flex-row" : "flex-row-reverse",
        className,
      )}
      {...props}
    >
      <div className="flex w-[40rem] flex-col gap-2">
        <h2 className="pb-4 text-2xl font-bold">{project.name}</h2>
        <div className="row flex gap-x-2 pb-4">
          {project.tech.map((e) => (
            <Squicle key={e}>{e}</Squicle>
          ))}
        </div>
        {project.description}
        <div className="flex gap-3 pt-5">
          {project.ghLink && (
            <a href={project.ghLink} target="_blank" rel="noreferrer">
              <Button>View Github</Button>
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              <Button variant="link" className="text-white">
                <span>View project</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Button>
            </a>
          )}
        </div>
      </div>
      <div className="h-80 w-[40rem] text-center">
        {project.previewUrls.length <= 1 ? (
          <img
            className="h-full w-full border-2 border-white object-cover"
            src={project.previewUrls[0]}
            alt={"No preview available"}
          />
        ) : (
          <Carousel
            plugins={[plugin.current]}
            className="h-full w-full border-2 border-white object-cover"
          >
            <CarouselContent>
              {project.previewUrls.map((v, i) => (
                <CarouselItem key={clsx(v, i)}>
                  <img
                    className="h-full w-full border-2 border-white object-cover"
                    src={v}
                    alt={"No preview available"}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        )}
        {/* <figcaption></figcaption> */}
      </div>
    </div>
  );
}

function Squicle({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={clsx("rounded-[20px] bg-blue-900 px-5 py-2", className, {
        ...props,
      })}
    >
      {children}
    </div>
  );
}
