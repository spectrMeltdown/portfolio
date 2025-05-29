import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./components/ui/button.tsx";
import AboutMe from "./AboutMe.tsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const bodyStyleStr = `bg-radial from-gray-800 from-0% to-gray-900 to-70% text-white px-20 py-10`;
    const bodyStyle = bodyStyleStr.split(/\s+/);

    bodyStyle.forEach((e) => document.body.classList.add(e));
    return () => {
      bodyStyle.forEach((e) => document.body.classList.remove(e));
    };
  }, []);

  // data
  const skills: Record<string, string[]> = {
    frontEnd: ["JavaScript", "HTML", "CSS", "React", "Tailwind", "Bootstrap"],
    backend: ["PHP"],
    crossPlatform: ["Flutter"],
    database: ["MySQL", "Firestore"],
    general: ["Git", "Github", "NodeJS", "Firebase", "Figma"],
  };

  const projects: object = {};

  const reshuffled: string[] = [];
  for (const arr of Object.values(skills)) {
    const completed: number[] = [];
    const maxInd = arr.length <= 10 ? arr.length : 10;
    const getRand = () => Math.floor(Math.random() * maxInd);
    for (let i = 0; i < maxInd; i++) {
      let rand: number = getRand();
      while (completed.some((e) => e == rand)) {
        rand = getRand();
      }
      reshuffled.push(arr[rand]);
      completed.push(rand);
    }
  }

  return (
    <>
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold">Willow Diamada</h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#body">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#skills">Skills</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#projects">Projects</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {/* <NavigationMenuTrigger>Item One</NavigationMenuTrigger> */}
              <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="my-10 grid grid-cols-[auto_auto] gap-10">
        <div className="col">
          <h3 className="block pb-5 text-4xl font-bold">
            Hello <span className="text-6xl text-primary">.</span>
          </h3>
          <div className="flex pb-5 align-bottom">
            {/* <div className={`${primary} absolute left-0 pt-4 font-extrabold`}>____________________</div> */}
            <h3 className="block text-4xl font-extralight">
              &nbsp;&nbsp;&nbsp;&nbsp;I&apos;m Willow
            </h3>
          </div>
          <h2 className="block text-5xl font-bold">Software Developer</h2>
          <div className="flex gap-2 px-5 py-10">
            <Button className="" variant="outline">
              Got a project?
            </Button>
            <Button>My resume</Button>
          </div>
        </div>
        <div className="col">
          <p className="h-100% w-100%">{"< My face here >"}</p>
        </div>
      </div>
      <div className="mx-[-5rem] flex justify-center bg-gradient-to-r from-gray-800 to-gray-700 opacity-70">
        <ul className="flex list-none gap-8 overflow-hidden py-5 text-2xl opacity-50">
          {reshuffled.map((item, index) => {
            const key = `strip-item-${index}`;
            return (
              <li key={key} id={key} className="text-lg">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <AboutMe />
    </>
  );
}

export default App;
