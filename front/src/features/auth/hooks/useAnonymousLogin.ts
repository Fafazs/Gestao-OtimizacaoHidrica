import {
  anonymousLogin,
} from '../services/authService';

import { useAuth } from './useAuth';

export function useAnonymousLogin() {
  const { login } = useAuth();

  async function submit() {
    const response =
      await anonymousLogin();

    login(
      response.token,
      response.user
    );
  }

  return {
    submit,
  };
}