import { AxiosError } from 'axios';

export const parseError = (error: AxiosError): string => {
  switch (error.status) {
    case 400: {
      return 'Не верные данные';
    }
    case 401: {
      return 'Нет доступа';
    }
    case 404: {
      return 'Нет найдено';
    }
    default:
      return 'Something went wrong';
  }
};
