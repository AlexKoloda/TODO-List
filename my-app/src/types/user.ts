export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  id: number;
}

export type UserSignUp = Omit<User, 'id'>;

export interface UserSignIn {
  email: string;
  password: string;
}

export interface UserState {
  user: User | null;
  loading: boolean,
}