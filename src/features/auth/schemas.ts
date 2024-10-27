import {z} from "zod";

export const loginSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().min(1, "Required").max(256),
});

export const registerSchema =  z.object({
  name: z.string().trim().min(1, "Required").max(256),
  email: z.string().trim().email(),
  password: z.string().min(8, "Minimum 8 characters required.").max(256),
});