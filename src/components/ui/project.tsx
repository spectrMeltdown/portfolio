import clsx from "clsx";
import type React from "react";
import { type ProjectType } from "@/types";
import { Button } from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { motion } from "motion/react";
import { isTouchDevice } from "@/utils";

export default function Project({
  project,
  className,
  index,
  ...props
}: React.ComponentProps<"div"> & {
  project: ProjectType;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState("");
  const isTouch: boolean = isTouchDevice();
  const isEven: boolean = useMemo(() => index % 2 === 0, [index]);
  const plugin = useRef(
    Autoplay({
      delay: Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000,
    }),
  );

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent): void {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div
        className={clsx(
          "grid-rows grid place-content-center place-items-center gap-x-20 gap-y-20 px-10 py-10 lg:grid-cols-[40%_40%]",
          className,
        )}
        {...props}
      >
        <motion.div
          className={clsx(
            "flex flex-col gap-2",
            isEven ? "lg:order-2" : "lg:order-1",
          )}
          initial={{ opacity: 0, y: 70 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="pb-4 text-2xl font-bold">{project.name}</h2>
          {project.status && (
            <p className="pb-3 text-sm font-semibold text-gray-300">
              Status: {project.status}
            </p>
          )}
          <div className="row flex flex-wrap gap-2 pb-4">
            {project.tech.map((e) => (
              <Squicle key={e}>{e}</Squicle>
            ))}
          </div>
          <div className="space-y-3">
            {project.problem && (
              <p>
                <span className="font-semibold text-primary">Problem:</span>{" "}
                {project.problem}
              </p>
            )}
            {project.contribution && (
              <p>
                <span className="font-semibold text-primary">
                  Contribution:
                </span>{" "}
                {project.contribution}
              </p>
            )}
            {project.outcome && (
              <p>
                <span className="font-semibold text-primary">Outcome:</span>{" "}
                {project.outcome}
              </p>
            )}
          </div>
          <div className="flex gap-3 pt-5">
            {project.ghLink && (
              <a href={project.ghLink} target="_blank" rel="noreferrer">
                <Button>Source Code</Button>
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <Button variant="outline" className="text-white">
                  <span>Live Demo</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Button>
              </a>
            )}
          </div>
        </motion.div>
        <motion.div
          className={clsx("text-center", isEven ? "lg:order-1" : "lg:order-2")}
          initial={{ opacity: 0, y: 70 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {project.previewUrls.length <= 1 ? (
            <img
              className="h-full w-full border-2 border-white object-cover"
              src={project.previewUrls[0]}
              alt={`${project.name} preview`}
            />
          ) : (
            <div className="flex flex-col justify-center">
              <Carousel plugins={[plugin.current]}>
                <CarouselContent>
                  {project.previewUrls.map((v, i) => (
                    <>
                      {/* <CarouselItem
                    key={clsx(v, i)}
                    className="flex flex-col justify-center"
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={v}
                      alt={"No preview available"}
                    />
                  </CarouselItem> */}
                      <CarouselItem key={clsx(v, i, "dialog")}>
                        <img
                          src={v}
                          alt={`${project.name} preview ${i + 1}`}
                          className="cursor-pointer"
                          onClick={() => {
                            setActiveImg(v);
                            setOpen(true);
                          }}
                        />
                      </CarouselItem>
                    </>
                  ))}
                </CarouselContent>
                <CarouselNext className="hidden md:flex" />
                <CarouselPrevious className="hidden md:flex" />
              </Carousel>
              {/* <div className="border-2 border-white"></div> */}
            </div>
          )}
          {/* <figcaption></figcaption> */}
        </motion.div>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => {
            setOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} preview dialog`}
        >
          <button
            className="absolute top-5 right-5 rounded-md bg-gray-900 px-3 py-1 text-sm"
            onClick={() => {
              setOpen(false);
            }}
            aria-label="Close preview"
          >
            Close
          </button>
          <img
            src={activeImg}
            alt={`${project.name} enlarged preview`}
            className="max-h-full max-w-full object-contain"
          />
          <p className="absolute top-5 text-2xl text-shadow-black/20 text-shadow-sm">
            {isTouch ? "Tap" : "Click"} anywhere to close
          </p>
        </div>
      )}
    </>
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
