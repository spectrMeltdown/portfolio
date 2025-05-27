import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import {
  faMobile,
  faLaptop,
  faTablet,
} from "@fortawesome/free-solid-svg-icons";

export default AboutMe;

function AboutMe() {
  // const categories = new Map<string, string>([
  //   ["Web", "developer.svg"],
  //   ["WebsiteDevelopment", "developer.svg"],
  //   ["Cross-platform", "developer.svg"],
  // ]);
  return (
    <div className="grid grid-cols-[50%_50%] py-10">
      <Line />
      <div className="col-auto">
        <h2 className="mb-5 text-4xl font-bold">About me</h2>
        <p>
          My passion for software development started from my desire to
          customize my home computer. I loved tinkering with OS and underlying
          hardware, and since then, I developed a passion for learning the
          language of the computer and how developers express that though coding
          and software development.
        </p>
      </div>
    </div>
  );
}

function Line() {
  const mobileIcon = ({ stack = false }: { stack: boolean }) => (
    <FontAwesomeIcon
      icon={faMobile}
      size={stack ? "lg" : "2xl"}
      className={`${stack ? "mt-[0.7rem] ml-[0.8rem] rounded-[3px] border-[0.12rem] border-gray-800 bg-gray-800" : "pr-3"}`}
    />
  );
  const laptopIcon = <FontAwesomeIcon icon={faLaptop} size={"2x"} />;
  const tabletIcon = ({ stack = false }: { stack: boolean }) => (
    <FontAwesomeIcon
      icon={faTablet}
      size={stack ? "xl" : "2xl"}
      className={`${stack ? "mt-[0.5rem] ml-[-3rem] rounded-[3px] border-[0.12rem] border-gray-800 bg-gray-800" : ""}`}
    />
  );
  return (
    <div className="col-auto">
      <div className="ml-1.5 flex h-10 items-center gap-3 border-l-2 border-primary pl-10">
        <FontAwesomeIcon
          icon={faWindowMaximize}
          size={"2xl"}
          className="pr-3"
        />
        {"Website Development"}
      </div>
      <div className="mx-[0.22rem] my-2 size-2 rounded-full bg-primary pr-1"></div>
      <div className="ml-1.5 flex h-10 items-center gap-4 border-l-2 border-primary pl-11">
        {mobileIcon({ stack: false })}
        {"App Development"}
      </div>
      <div className="mx-[0.22rem] my-2 size-2 rounded-full bg-primary pr-1"></div>
      <div className="ml-1.5 flex h-10 items-center gap-2 border-l-2 border-primary pl-10">
        <div className="flex">
          {laptopIcon}
          {tabletIcon({ stack: true })}
          {mobileIcon({ stack: true })}
        </div>
        {"Cross-Platform Development"}
      </div>
    </div>
  );
}
