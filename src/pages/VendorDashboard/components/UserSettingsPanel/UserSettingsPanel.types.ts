import z from 'zod';

export enum AccountType {
  USER,
  FARMER,
}

const errorMap = (issue: z.ZodIssueOptionalMessage) => {
  switch (issue.code) {
    case z.ZodIssueCode.invalid_type:
      return { message: 'input.required' };
    default:
      return { message: 'input.error' };
  }
};

export const UserSettings = z.object({
  accountType: z.nativeEnum(AccountType),
  email: z
    .string({
      errorMap,
    })
    .email('input.invalidEmail'),
  name: z.string({ errorMap }),
  password: z.string({ errorMap }),
  surname: z.string({ errorMap }),
});

export type UserSettings = z.infer<typeof UserSettings>;
