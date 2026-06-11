export interface AuthResponseDTO {
  token: string;

  user: {
    id: number;
    name: string;
    email: string;
  };
}