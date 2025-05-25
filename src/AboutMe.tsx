import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function AboutMe() {
  const categories: Map<string, string> = new Map([
    ['Web', 'developer.svg'],
    ['WebsiteDevelopment', 'developer.svg'],
    ['Cross-platform', 'developer.svg'],
  ]);
  return (
    <div className="grid grid-cols-[auto_auto]">
      <div className="col-auto">

      </div>
      <div className="col-auto">
        <h2 className='text-2xl font-bold'>About me</h2>
        <p>
          My passion for software development started from my desire to customize
          my home computer. I loved tinkering with OS and underlying hardware,
          and since then, I developed a passion for learning the language of the computer
          and how developers express that though coding and software development.
        </p>
      </div>
    </div>
  );
}