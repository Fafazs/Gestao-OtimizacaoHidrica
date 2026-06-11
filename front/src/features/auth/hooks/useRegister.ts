import { register } from '../services/authService';

import { useAuth } from './useAuth';

import type {
  RegisterDTO,
} from '../dto/registerDTO';

export function useRegister() {
  const { login } = useAuth();

  async function submit(
    data: RegisterDTO
  ) {
    const response =
      await register(data);

    login(
      response.token,
      response.user
    );

    return response;
  }

  return {
    submit,
  };
}