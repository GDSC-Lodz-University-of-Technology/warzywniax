/* eslint-disable camelcase */
import { z } from 'zod';

export const registerFormSchema = z
  .object({
    email: z.string({ required_error: 'required' }).min(1, 'required').email('email'),
    password: z.string({ required_error: 'required' }).min(1, 'required').min(6, 'minCharacters'),
    repeatPassword: z
      .string({ required_error: 'required' })
      .min(1, 'required')
      .min(6, 'minCharacters'),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'passwordsDontMatch',
    path: ['repeatPassword'],
  });

export type RegisterFormData = z.infer<typeof registerFormSchema>;
