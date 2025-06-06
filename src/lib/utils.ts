import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { EmailType } from "./types";
import * as emailjs from "@emailjs/browser";
import { toEmailJSParams } from "./helpers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projectPreviews = getProjPreviews();

function getProjPreviews(): Record<string, string[]> {
  const previews = import.meta.glob<{ default: string }>(
    "/src/assets/projects/**/*.{png,jpg,jpeg,webp}",
    { eager: true },
  );
  const result: Record<string, string[]> = {};

  Object.entries(previews).forEach(([path, mod]) => {
    const parts = path.split("/");
    const folder = parts[parts.length - 2]; //parent folder of the file

    if (!result[folder]) result[folder] = [];
    result[folder].push(mod.default);
  });

  return result;
}

function sendEmail(email: EmailType): void {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const templateId = import.meta.env.import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  emailjs
    .send(serviceId, templateId, toEmailJSParams(email), {
      publicKey: publicKey,
    })
    .then(() => {
      console.log("success");
    })
    .catch((e) => {
      console.error(e);
    });
}
