import Line from "./components/ui/line";
import Circle from "./components/ui/circle";
import { type ProjectType } from "./lib/types";
import Project from "./components/ui/project";
import clsx from "clsx";
import { projectPreviews } from "src/lib/utils";

export default Projects;

function Projects() {
  const projects: ProjectType[] = [
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
  ];
  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <h2 className="mb-5 text-5xl font-bold">Projects</h2>
      <Line isFlex="nonFlex" />
      <Circle className="mr-[0.31rem]" />
      {projects.map((v, i) => (
        <Project key={clsx(v, i)} project={v} index={i} />
      ))}
    </div>
  );
}
