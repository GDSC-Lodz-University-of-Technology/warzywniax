/* eslint-disable camelcase */
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

export const CreateShopFormData = z.object({
  description: z.string().min(3).max(500),
  mainLocationDescription: z.string().min(3).max(500),
  name: z.string().min(3).max(50),
});

export type CreateShopFormData = z.infer<typeof CreateShopFormData>;

export type LoginFormProps = {
  onFormSubmit: SubmitHandler<CreateShopFormData>;
};
