/* 
hex/skill tree concept (flat-top type):

        (0,-1)
   (-1,-1) (1,-1)
(-2,0)  (0,0)  (2,0)
   (-1,1)  (1,1)
       (0,1)

q: column (q is used in hexagon geometry instead of c for column)
r: row
*/

// import { useRef, useState } from "react";

// export default function SkillTree() {
//   const skills = useRef({
//     frontEnd: ["JavaScript", "HTML", "CSS", "React", "Tailwind", "Bootstrap"],
//     backend: ["PHP"],
//     crossPlatform: ["Flutter"],
//     database: ["MySQL"],
//     general: ["Git", "Github", "NodeJS", "Firebase", "Figma"],
//   });

//   return <></>;
// }

// const HEX_WIDTH = 100;
// const HEX_HEIGHT = (Math.sqrt(3) / 2) * HEX_WIDTH;

// type Hex = {
//   q: number;
//   r: number;
//   label: string;
// };

// function toHexArray(skillsArr: string[]): Hex[] {
//   if (skillsArr.length === 0) return [];
//   const hexArr: Hex[] = [];
//   // get number of layers to create based on length of skills (each layers is multiple of 6 i.e layer 1: 6, layer 2: 12, ...)
//   const layers = Math.ceil(skillsArr.length / 6);
//   const lastLayer = skillsArr.length % 6;
//   let sArrCounter = 0;

//   // for center just add right away
//   hexArr.push({ q: 0, r: 0, label: skillsArr[sArrCounter] });
//   sArrCounter++;

//   for (let i = 0; i <= layers; i++) {
//     // find how many hexes on that layer
//     const hexes = i == layers && lastLayer != 0 ? lastLayer : i + 1 * 6;

//     // check if even. Even numbers include a 0 horizontally
//     const isEven = hexes % 2 == 0;
//     const l = hexes / 4; // left side
//     const r = hexes / 4; // right side
//     const t = 1; // top
//     const b = 1; // bottom
//     const corner = (l + r + t + b) / 4;

//     // assign circularly starting from left
//     for (let i = 0; i <= l; i++) {}
//   }

//   return hexArr;
// }

// function generateRing(q: number, r: number) {
//   const x = HEX_WIDTH * (3 / 4) * q;
//   const y = HEX_HEIGHT * (r + q / 2);
//   return { x, y };
// }
