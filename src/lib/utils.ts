import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ContactFormData } from "./types";
import * as emailjs from "@emailjs/browser";

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

export async function sendEmail(email: ContactFormData): Promise<boolean> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  console.log(`${serviceId} + ${publicKey} + ${templateId}`);

  return new Promise((resolve) => {
    emailjs
      .send(serviceId, templateId, email, {
        publicKey: publicKey,
      })
      .then(() => {
        console.log("success");
        resolve(true);
      })
      .catch((e) => {
        console.error(e);
        resolve(false);
      });
  });
}
