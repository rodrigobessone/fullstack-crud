import { z } from "zod";
import { userSchema } from "./user.schemas";

export const contactSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(100),
    email: z.string().max(100).email(),
    contactNumber: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deleteAt: z.string().nullable(),
    user: userSchema
});

export const contactCreateSchema = contactSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deleteAt: true,
    user: true,
});

export const contactUpdateSchema = z.object({
    name: z.string().max(150).optional(),
    email: z.string().max(100).email().optional(),
    contactNumber: z.string().optional(),
  }).partial();

  
export const contactReturnSchema = contactSchema
export const contactReadSchema = contactReturnSchema.array();
