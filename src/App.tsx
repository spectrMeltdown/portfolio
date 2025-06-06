import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./components/ui/button.tsx";
import AboutMe from "./AboutMe.tsx";
import { useEffect } from "react";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";
import Footer from "./Footer.tsx";
import { motion } from "motion/react";
import Layout from "./Layout.tsx";

function App() {
  useEffect(() => {
    const bodyStyleStr = `bg-radial from-gray-800 from-0% to-gray-900 to-70% text-white px-25 py-10`;
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
    database: ["MySQL"],
    general: ["Git", "Github", "NodeJS", "Firebase", "Figma"],
  };

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

  const downloadResume = (): void => {
    const link = document.createElement("a");
    link.href = "/src/assets/resume.pdf";
    link.download = "Resume - Willow Diamada, Developer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold">Willow Diamada</h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#body">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#body">Skills</NavigationMenuLink>
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
      <div className="my-10 grid grid-cols-[50%_50%] gap-10 self-center px-10">
        <div className="col">
          <h3 className="block pb-5 text-4xl font-bold">
            Hello <span className="text-6xl text-primary">.</span>
          </h3>
          <div className="flex pb-5 align-bottom">
            <div className={`absolute left-0 pt-4 font-extrabold text-primary`}>
              {"_".repeat(25)}
            </div>
            <h3 className="block text-4xl font-extralight">
              &nbsp;&nbsp;&nbsp;&nbsp;I&apos;m Willow
            </h3>
          </div>
          <h2 className="block text-5xl font-bold">Software Developer</h2>
          <div className="flex gap-2 px-5 py-10">
            <Button className="" variant="outline">
              Got a project?
            </Button>
            <Button onClick={downloadResume}>My resume</Button>
          </div>
        </div>
        <div className="relative mb-[-2.5rem] h-100 w-100">
          <img
            className="h-100"
            src="/src/assets/me.webp"
            alt="picture of me"
            height="50px"
          />
          {/* <div className="relative top-[-100%] z-[-1] h-[110%] w-[110%] rounded-full border-40 border-primary"></div> */}
          {/* <div className="relative top-[-120%] right-[10%] z-[-1] h-[130%] w-[130%] rounded-t-full rounded-b-lg bg-primary opacity-30 blur-3xl"></div> */}
          <motion.div
            className="relative top-[-120%] right-[10%] z-[-1] h-[130%] w-[130%] rounded-t-full rounded-b-lg bg-primary opacity-30 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
      <div className="mx-[-6.2rem] flex justify-center bg-gradient-to-r from-gray-800 to-gray-700 opacity-70">
        <ul className="flex list-none gap-8 overflow-hidden py-7 opacity-50">
          {reshuffled.map((item, index) => {
            const key = `strip-item-${index}`;
            return (
              <li key={key} id={key} className="font-mono text-xl">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
