import { z } from "zod";

export const CreateWorkspaceSchema = z.object({
    name: z.string().trim().min(1, "Required"),
    // userId: z.string().trim(),
});