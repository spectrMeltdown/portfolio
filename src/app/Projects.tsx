import Line from "@/components/ui/line";
import Circle from "@/components/ui/circle";
import Project from "@/components/ui/project";
import clsx from "clsx";
import { projectPreviews } from "@/utils";
import { useRef } from "react";
import { motion } from "motion/react";

export default function Projects() {
  const projects = useRef([
    {
      name: "MABISA",
      problem:
        "Barangays needed a centralized way to submit and track governance compliance documents for DILG programs.",
      contribution:
        "Implemented document upload flows, role-based access, and reporting features as part of the development team.",
      outcome:
        "Enabled structured submissions and streamlined reviewer validation across Aloran's 38 barangays.",
      status: "Production",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      previewUrls: projectPreviews["mabisa"],
      link: "https://mabisa-aloran.com",
      ghLink: "https://github.com/spectrMeltdown/mabisa2.0",
    },
    {
      name: "Block-Logic",
      problem:
        "Programming beginners need a friendlier way to understand logic without starting from syntax-heavy coding.",
      contribution:
        "Built a visual block-based Android learning game with a companion web admin portal.",
      outcome:
        "Delivered an interactive platform that makes core programming concepts more approachable for early learners.",
      status: "Production",
      tech: ["Flutter", "Firebase"],
      previewUrls: projectPreviews["block-logic"],
      link: "https://block-logic.site",
      ghLink: "",
    },
    {
      name: "Marathon Tracker",
      problem:
        "Device and organization tracking required a centralized interface for administration and monitoring.",
      contribution:
        "Developed an admin portal for managing tracker devices and organization-level setup.",
      outcome:
        "Improved visibility and control for device management workflows from a single web interface.",
      status: "Production",
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
