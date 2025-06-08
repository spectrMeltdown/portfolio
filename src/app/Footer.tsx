import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  type IconDefinition,
} from "@fortawesome/free-regular-svg-icons";
import clsx from "clsx";
import { motion } from "motion/react";

export default Footer;

interface Link {
  icon: IconDefinition;
  link: string;
  color: string;
}

function Footer() {
  const logos: Link[] = [
    {
      icon: faEnvelope,
      link: "mailto:wddiamada@gmail.com",
      color: "hover:text-green-200 hover:text-shadow-green-300",
    },
    {
      icon: faGithub,
      link: "https://github.com/spectrMeltdown",
      color: "hover:text-gray-300 hover:text-shadow-gray-300",
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/willow-diamada-2b1772369",
      color: "hover:text-blue-300  hover:text-shadow-blue-300",
    },
  ];
  return (
    <div className="mx-[-6.2rem] mb-[-3rem] flex justify-center bg-gray-700 py-[4rem] text-center align-middle">
      <div className="flex flex-col gap-y-3">
        <h2 className="text-4xl font-bold">Willow Diamada</h2>
        <p>&copy; {"2025, all rights reserved."}</p>
        <div className="flex justify-center gap-5">
          {logos.map((v, i) => (
            <a
              target="_blank"
              rel="noreferrer"
              key={clsx(i, "link")}
              href={v.link}
            >
              <motion.div initial={{ y: 0 }} whileHover={{ y: -5 }}>
                <FontAwesomeIcon
                  className={clsx("hover:text-shadow-2xs", v.color)}
                  key={clsx(i, "icon")}
                  icon={v.icon}
                  size="3x"
                />
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
