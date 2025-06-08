import Line from "@/components/ui/line";
import Circle from "@/components/ui/circle";
import Project from "@/components/ui/project";
import clsx from "clsx";
import { projectPreviews } from "@/utils";
import { useRef } from "react";
import { motion } from "motion/react";

export default Projects;

function Projects() {
  const projects = useRef([
    {
      name: "MABISA",
      description:
        "A document submission and compliance tracking system for Aloran's 38 barangays, built to support DILG's SGLGB and ARTA programs. Enables barangay officials to upload governance documents and allows DILG reviewers to validate submissions. I contributed as a developer, helping implement the document upload workflow, role-based access, and reporting features.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      previewUrls: projectPreviews["mabisa"],
      link: "https://mabisa-aloran.com",
      ghLink: "https://github.com/badiang/mabisa2.0",
    },
    {
      name: "Block-Logic",
      description:
        "A visual block-based programming game on mobile designed to aid beginners and novices in programming to increase their understanding of how it all works, and to have fun as well! App is available on Android only. Also has a web-based admin portal for managing the platform.",
      tech: ["Flutter", "Firebase"],
      previewUrls: projectPreviews["block-logic"],
      link: "https://block-logic.site",
      ghLink: "",
    },
    {
      name: "Marathon Tracker",
      description:
        "An admin portal for tracking and managing Marathon Tracker devices. You can create your own organization as needed.",
      tech: ["Flutter", "Firebase"],
      previewUrls: projectPreviews["marathon-tracker"],
      link: "https://marathon-tracking-device.web.app/",
      ghLink: "",
    },
  ]);
  return (
    <div className="my-10 rounded-2xl bg-gray-800 py-20 shadow-2xl">
      <div className="flex flex-col items-center">
        <motion.h2
          className="mb-5 text-5xl font-bold"
          initial={{ opacity: 0, y: 70 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <Line isFlex="nonFlex" />
        <Circle className="mr-[0.31rem]" />
      </div>
      <div
        className="flex flex-col items-center gap-y-10 md:gap-y-20"
        id="projects"
      >
        {projects.current.map((v, i) => (
          <Project key={clsx(v, i)} project={v} index={i} />
        ))}
      </div>
    </div>
  );
}
