import clsx from "clsx";
import type React from "react";
import type ProjectType from "src/types/project";

export default function Project({
  project,
  className,
  key,
  ...props
}: React.ComponentProps<"div"> & { project: ProjectType }) {
  return (
    <div
      className={clsx(
        "grid grid-cols-[40vw_40vw] gap-10 px-10 pt-5 pb-3",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">{project.name}</h2>
        <div className="row flex gap-x-2">
          {project.tech.map((e) => (
            <Squicle key={e}>{e}</Squicle>
          ))}
        </div>
        {project.description}
      </div>
      <div className="h-80 w-full text-center">
        <img
          className="h-full w-full border-2 border-amber-400 object-cover"
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
      className={clsx("rounded-[20px] bg-gray-800 px-5 py-2", className, {
        ...props,
      })}
    >
      {children}
    </div>
  );
}
