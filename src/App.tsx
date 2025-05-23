import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Project from './models/project.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';
import { Button } from "./components/ui/button.tsx";

function App() {
  // colors
  const primary: string = 'text-red-400';

  // data
  const skills: { [key: string]: Array<string> } = {
    frontEnd: ['JavaScript', 'HTML', 'CSS', 'React', 'Tailwind', 'Bootstrap'],
    backend: ['PHP'],
    crossPlatform: ['Flutter'],
    database: ['MySQL', 'Firestore'],
    general: ['Git', 'Github', 'NodeJS', 'Firebase', 'Figma'],
  }

  const projects: object = {

  }

  return (
    <div className="bg-gray-800 bg-radial from-gray-800 from-0% to-gray-900 to-70% w-full h-full absolute text-white px-30 py-10">
      <div className="flex justify-between w-full">
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
      <div className="row-auto my-10">
        <div className="col">
          <h3 className="block text-4xl pb-5 font-bold">Hello <span className={`${primary} text-6xl`}>.</span></h3>
          <div className="flex align-bottom pb-5">
            {/* <div className={`${primary} absolute left-0 pt-4 font-extrabold`}>____________________</div> */}
            <h3 className="block text-4xl font-extralight">&nbsp;&nbsp;&nbsp;&nbsp;I'm Willow</h3>
          </div>
          <h2 className="block text-5xl font-bold">Software Developer</h2>
          <div className="flex gap-2 px-5 py-10">
            <Button className="" variant='outline'>Got a project?</Button>
            <Button>My resume</Button>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="flex justify-around">
        <motion.div className="inline-block" animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
          transition={
            {
              duration: 0.8,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
              ease: 'easeInOut'
            }
          }>
          <FontAwesomeIcon icon={faArrowAltCircleDown} size="3x" />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
