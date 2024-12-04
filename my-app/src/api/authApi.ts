import { User } from '../store/userSlice';
import { confAXIOS } from './confAXIOS';

export const signUpApi = async (user: User) => {
  try {
    return await confAXIOS.post('/sign-up', user);
  } catch (error) {
    console.log(error);
  }
};



