export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  dateBirth: string;
  id: number;
}

export type UserSignUp = Omit<User, 'id'>;

export interface UserSignIn {
  email: string;
  password: string;
}

export interface UserState {
  users: User | null;
  loading: boolean,
}