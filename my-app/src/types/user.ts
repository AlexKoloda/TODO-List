export interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  dateBirth?: string;
}

export interface UserSignIn {
  email: string;
  password: string;
}

export interface UserState {
  users: User;
}