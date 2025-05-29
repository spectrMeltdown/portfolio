import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default Footer;

function Footer() {
  return (
    <div className="grid grid-cols-[50%_50%] py-20">
      <div className="col-auto">
        <h2 className="mb-5 text-4xl font-bold">Willow D. Diamada</h2>
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
