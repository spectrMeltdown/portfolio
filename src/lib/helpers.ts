import type { EmailType } from "./types";

export function toEmailJSParams(email: EmailType) {
  return {
    name: email.name,
    email: email.email,
    message: email.message,
  };
}
