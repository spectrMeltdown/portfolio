import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button.tsx";
import AboutMe from "@/app/AboutMe.tsx";
import { useEffect } from "react";
import Projects from "@/app/Projects.tsx";
import Contact from "@/app/Contact.tsx";
import Footer from "@/app/Footer.tsx";
import Layout from "@/app/Layout.tsx";
import resume from "@/assets/Willow_Diamada_resume.pdf";
import { motion } from "motion/react";

function App() {
  useEffect(() => {
    const bodyStyleStr = `bg-gray-900 text-white px-5 md:px-25 py-10`;
    const bodyStyle = bodyStyleStr.split(/\s+/);

    bodyStyle.forEach((e) => document.body.classList.add(e));
    return () => {
      bodyStyle.forEach((e) => document.body.classList.remove(e));
    };
  }, []);

  // const skills = useRef({
  //   frontEnd: ["JavaScript", "HTML", "CSS", "React", "Tailwind", "Bootstrap"],
  //   backend: ["PHP"],
  //   crossPlatform: ["Flutter"],
  //   database: ["MySQL"],
  //   general: ["Git", "Github", "NodeJS", "Firebase", "Figma"],
  // });

  function downloadResume(): void {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Resume - Willow Diamada, Developer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <Layout>
      <motion.div
        className="flex w-full justify-between"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay: 1 }}
      >
        <h1 className="text-2xl font-bold">Willow Diamada</h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#about">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#skills">Skills</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#projects">Projects</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </motion.div>
      <div className="grid h-[90vh] items-center justify-start">
        <div className="lg:ml-30">
          <motion.h3
            className="block pb-5 text-4xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.6 }}
          >
            {"Hello, I'm"}
          </motion.h3>
          <div className="flex pb-5 align-bottom">
            <motion.h3
              className="block text-6xl font-extrabold"
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Willow Diamada
            </motion.h3>
          </div>
          <motion.h2
            className="block text-5xl font-extralight"
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.6 }}
          >
            Software Developer
          </motion.h2>
          <motion.div
            className="flex gap-2 py-10"
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <a href="#contact">
              <Button variant="outline">Got a project?</Button>
            </a>
            <Button onClick={downloadResume}>My resume</Button>
          </motion.div>
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
