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
    const bodyStyleStr = "bg-gray-800 bg-radial from-gray-800 from-0% to-gray-900 to-70% w-full h-full text-white px-30 py-10";
    const bodyStyle = bodyStyleStr.split(/\s+/);
    bodyStyle.forEach(
      (e) => document.body.classList.add(e)
    )
    return () => {
      bodyStyle.forEach(
        (e) => document.body.classList.remove(e)
      )
    }
  }, [])


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

  const reshuffled: Array<string> = [];
  for (const arr of Object.values(skills)) {
    const completed: Array<number> = [];
    const maxInd = arr.length;
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
      <div className="grid grid-cols-[auto_auto] gap-10 my-10">
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
        <div className="col">
          <p className="h-100% w-100%">{'< My face here >'}</p>
        </div>
      </div>
      <div className="flex justify-center bg-gray-800 w-100% left-0 right-0">
        <ul className="flex gap-8 list-none text-2xl opacity-30 py-5">
          {reshuffled.map((item, index) => <li id={`strip-item-${index}`}>
            {item}
          </li>)}
        </ul>
      </div>
      <AboutMe />
    </>
  );
}

export default App;
