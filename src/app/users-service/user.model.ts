export enum UserType {
  Admin = 'admin',
  User = 'user'
}

export type UserId = string;

export interface User {
  id: UserId;
  name: string;
  type: UserType;
  version: number;
}

export type NewUser = Omit<User, 'id'>;
