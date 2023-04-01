/* eslint-disable camelcase */
import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string({ required_error: 'required' }).min(1, 'required').email('email'),
  password: z.string({ required_error: 'required' }).min(1, 'required').min(6, 'minCharacters'),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;
