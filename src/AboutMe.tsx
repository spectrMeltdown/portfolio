import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import {
  faMobile,
  faDesktop,
  faTablet,
} from "@fortawesome/free-solid-svg-icons";
import Circle from "./components/ui/circle";
import Line from "./components/ui/line";

export default AboutMe;

function AboutMe() {
  // const categories = new Map<string, string>([
  //   ["Web", "developer.svg"],
  //   ["WebsiteDevelopment", "developer.svg"],
  //   ["Cross-platform", "developer.svg"],
  // ]);
  return (
    <div className="grid grid-cols-[50%_50%] px-20 py-20">
      <Lines />
      <div className="col-auto">
        <h2 className="mb-5 text-4xl font-bold">About me</h2>
        <p>
          My passion for software development started from my desire to
          customize my home computer. I loved tinkering with OS and underlying
          hardware when I was young. Later in life, I developed a passion for
          learning the language and logic of the computer, solving problems and
          figuring out how to express that though coding and software
          development.
        </p>
      </div>
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
    <div className="col-auto">
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
