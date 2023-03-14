import { z } from 'zod';

export enum UserType {
  USER,
  VENDOR,
}
export const UserTypeEnum = z.nativeEnum(UserType);
export type UserTypeEnum = z.infer<typeof UserTypeEnum>;

export const UserRecord = z.object({
  avatarUrl: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  type: UserTypeEnum,
});
