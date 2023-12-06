import { z } from "zod";

export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(100),
    email: z.string().max(100).email(),
    password: z.string().max(100),
    contactNumber: z.string(),
    createdAt: z.string().nullable(),
    updatedAt: z.string().nullable(),
    deleteAt: z.string().nullable(),
});

export const userCreateSchema = userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deleteAt: true,
})

export const loginSchema = z.object({
    id: z.string().optional(),
    email: z.string().max(100).email(),
    password: z.string().max(100),
  });

export const userReturnSchema = userSchema.omit({ password: true });
export const userReadSchema = userReturnSchema.array();

