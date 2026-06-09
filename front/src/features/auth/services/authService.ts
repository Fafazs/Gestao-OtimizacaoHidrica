import type { RegisterDTO }
from '../dto/registerDTO';

import type { RegisterResponseDTO }
from '../dto/registerResponseDTO';

export async function register(
  data: RegisterDTO
): Promise<RegisterResponseDTO> {

  console.log('REQUEST ENVIADA:', data);

  await new Promise(resolve =>
    setTimeout(resolve, 1500)
  );

  return {
    token: 'jwt-token-fake-123',

    user: {
      id: 1,
      name: data.name,
      email: data.email,
    },
  };
}