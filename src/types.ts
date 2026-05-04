import z from "zod";

export interface ProjectType {
  name: string;
  tech: string[];
  previewUrls: string[];
  link?: string;
  ghLink?: string;
  problem?: string;
  contribution?: string;
  outcome?: string;
  status?: string;
}

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().min(2).max(100).email(),
  message: z.string().min(2).max(500),
  time: z.date(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
