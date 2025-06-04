import clsx from "clsx";
import type React from "react";
import type ProjectType from "src/types/project";
import { Button } from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";

export default function Project({
  project,
  className,
  index,
  ...props
}: React.ComponentProps<"div"> & { project: ProjectType; index: number }) {
  const isEven: boolean = index % 2 === 0;
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
          <Button>View Github</Button>
          <Button
            variant="link"
            className="text-white"
            onClick={() => {
              console.log("clicked");
            }}
          >
            <span>View project</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Button>
        </div>
      </div>
      <div className="h-80 w-[40rem] text-center">
        <img
          className="h-full w-full border-2 border-white object-cover"
          src={project.previewUrl}
          alt={"No preview available"}
        />
        <figcaption></figcaption>
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
