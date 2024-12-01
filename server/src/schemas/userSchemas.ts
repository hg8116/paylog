import { z } from "zod";

export const updateUserNameSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, "ID must be a number"),
  }),
});

export const updateUserPasswordSchema = z.object({
  body: z.object({
    oldPassword: z.string().min(1, "Old password is required"),
    newPassword: z.string().min(6, "Password should be atleast 6 digits"),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, "ID must be a number"),
  }),
});
