import { z } from "zod";

export const updateUserNameSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
  })
});

export const updateUserPasswordSchema = z.object({
  body: z.object({
    oldPassword: z.string().min(1, "Old password is required"),
    newPassword: z.string().min(6, "Password should be atleast 6 digits"),
  }),
});
