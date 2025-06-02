import clsx from "clsx";
import type React from "react";
import type ProjectType from "src/types/project";

export default function Project({
  project,
  className,
  ...props
}: React.ComponentProps<"div"> & { project: ProjectType }) {
  return (
    <div className={clsx("grid grid-cols-[auto_auto]", className)} {...props}>
      <div className="col flex">
        <h2 className="text-2xl font-bold">{project.name}</h2>
        <div className="row flex">
          {project.tech.map((e) => (
            <Squicle key={e}>{e}</Squicle>
          ))}
        </div>
        {project.description}
      </div>
      <div className="col flex">
        <img
          src={project.previewUrl}
          alt={"No preview available"}
          width="3rem"
          height="3rem"
        />
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
      className={clsx("bg color rounded-md bg-gray-800 p-2", className, {
        ...props,
      })}
    >
      {children}
    </div>
  );
}
