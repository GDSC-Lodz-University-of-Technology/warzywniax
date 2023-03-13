export interface User {
  firstName: string;
  lastName: string;
  avatarUrl: string;
  email: string;
  type: UserType;
}

export const enum UserType {
  USER,
  DEALER,
}
