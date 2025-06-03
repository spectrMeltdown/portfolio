import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import {
  faMobile,
  faLaptop,
  faTablet,
} from "@fortawesome/free-solid-svg-icons";
import Line from "./components/ui/line";
import Circle from "./components/ui/circle";
import type ProjectType from "./types/project";
import Project from "./components/ui/project";
import clsx from "clsx";

export default Projects;

function Projects() {
  const projects: ProjectType[] = [
    {
      name: "MABISA",
      description:
        "A document submission and compliance tracking system for Aloran's 38 barangays, built to support DILG's SGLGB and ARTA programs. Enables barangay officials to upload governance documents and allows DILG reviewers to validate submissions. I contributed as a developer, helping implement the document upload workflow, role-based access, and reporting features.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      previewUrl: "",
      link: "https://mabisa-aloran.com",
      ghLink: "",
    },
    {
      name: "Block-Logic",
      description: "An admin portal for managing the game Block-Logic",
      tech: ["Flutter", "Firebase"],
      previewUrl: "",
      link: "https://block-logic.site",
      ghLink: "",
    },
    {
      name: "Marathon Tracker",
      description:
        "An admin portal for tracking and managing Marathon Tracker devices. You can create your own organization as needed.",
      tech: ["Flutter", "Firebase"],
      previewUrl: "",
      link: "https://marathon-tracking-device.web.app/",
      ghLink: "",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-5 text-5xl font-bold">Projects</h2>
      <Line isFlex="nonFlex" />
      <Circle className="mr-[0.31rem]" />
      {projects.map((v, i) => (
        <Project key={clsx(v, i)} project={v} />
      ))}
    </div>
  );
}
