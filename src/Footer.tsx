import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  type IconDefinition,
} from "@fortawesome/free-regular-svg-icons";
import clsx from "clsx";

export default Footer;

interface Link {
  icon: IconDefinition;
  link: string;
}

function Footer() {
  const logos: Link[] = [
    { icon: faEnvelope, link: "mailto:wddiamada@gmail.com" },
    { icon: faGithub, link: "https://github.com/spectrMeltdown" },
    { icon: faLinkedin, link: "" },
  ];
  return (
    <div className="mx-[-6.2rem] mb-[-3rem] flex justify-center bg-gray-700 py-[4rem] text-center align-middle">
      <div className="flex flex-col gap-y-3">
        <h2 className="text-4xl font-bold">Willow Diamada</h2>
        <p>{"Designed with love, all rights reserved."}</p>
        <div className="flex justify-center gap-5">
          {logos.map((v, i) => (
            <a
              target="_blank"
              rel="noreferrer"
              key={clsx(i, "link")}
              href={v.link}
            >
              <FontAwesomeIcon key={clsx(i, "icon")} icon={v.icon} size="3x" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
