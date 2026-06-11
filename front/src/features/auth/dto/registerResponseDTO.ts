import type { AuthUser } from '../types/authUser';

export interface RegisterResponseDTO {
  token: string;
  user: AuthUser;
}