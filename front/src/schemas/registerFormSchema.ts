import * as z from 'zod';

export const RegisterSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  email: z.string(),
  password: z.string().min(8, {
      message: 'A senha é obrigatória e precisa ter no mínimo 8 caracteres',
    })
    .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número'),
  confirm: z.string().min(1, 'A confirmação de senha é obrigatória'),
  contactNumber: z.string()
}).refine(({ password, confirm }) => password === confirm, {
  message: 'As senhas precisam corresponder',
  path: ['confirm'],
});

export type TRegisterUserSchema = z.infer<typeof RegisterSchema>;