import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import {
  faMobile,
  faDesktop,
  faTablet,
} from "@fortawesome/free-solid-svg-icons";
import Circle from "@/components/ui/circle";
import Line from "@/components/ui/line";
import { motion } from "motion/react";

export default AboutMe;

function AboutMe() {
  return (
    <div className="grid grid-cols-1 place-content-center gap-y-20 rounded-2xl bg-gray-800 px-10 py-20 shadow-2xl md:px-20 lg:grid-cols-[50%_50%]">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="skills"
      >
        <h2 className="mb-5 text-4xl font-bold">Skills</h2>
        <Lines />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        id="about"
      >
        <h2 className="mb-5 text-4xl font-bold">About me</h2>
        <p className="pb-4">
          My passion for software development started from my curiosity about
          how systems work, from OS customization to hardware tinkering. That
          curiosity grew into a focus on building practical software that
          solves real operational problems.
        </p>
        <p className="pb-4">
          I graduated Cum Laude with a Bachelor of Science in Information
          Technology (2020-2025), and I enjoy translating business workflows
          into reliable digital processes.
        </p>
        <p>
          I currently focus on web, mobile, and ERP-driven development,
          especially projects where process automation and usability matter.
        </p>
      </motion.div>
    </div>
  );
}

function Lines() {
  const mobileIcon = ({ stack = false }: { stack?: boolean; gap?: string }) => (
    <FontAwesomeIcon
      icon={faMobile}
      size={stack ? "lg" : "2xl"}
      className={`${stack ? `mt-[0.7rem] ml-5 rounded-[3px] border-[0.12rem] border-gray-800 bg-gray-800` : "pr-3"}`}
    />
  );
  const laptopIcon = <FontAwesomeIcon icon={faDesktop} size={"2x"} />;
  const tabletIcon = ({ stack = false }: { stack: boolean }) => (
    <FontAwesomeIcon
      icon={faTablet}
      size={stack ? "xl" : "2xl"}
      className={`${stack ? "mt-[0.5rem] mr-[0.5rem] ml-[-3.3rem] rounded-[3px] border-[0.12rem] border-gray-800 bg-gray-800" : ""}`}
    />
  );
  return (
    <div className="flex flex-col flex-wrap">
      <Line>
        <FontAwesomeIcon
          icon={faWindowMaximize}
          size={"2xl"}
          className="pr-3 pl-1"
        />
        {"Web Development"}
      </Line>
      <Circle />
      <Line>
        <div className="pl-2">{mobileIcon({ gap: "ml-5" })}</div>
        {"App Development"}
      </Line>
      <Circle />
      <Line>
        <div className="flex scale-75">
          {laptopIcon}
          {tabletIcon({ stack: true })}
          {mobileIcon({ stack: true })}
        </div>
        {"Cross-Platform Development"}
      </Line>
    </div>
  );
}
