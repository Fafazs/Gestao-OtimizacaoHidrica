import { apiFetch }
from '../../../shared/services/api';

import type { RegisterDTO }
from '../dto/registerDTO';

import type { RegisterResponseDTO }
from '../dto/registerResponseDTO';

export async function register(
  data: RegisterDTO
): Promise<RegisterResponseDTO> {

  return apiFetch(
    '/api/auth/register',
    {
      method: 'POST',

      headers: {
        'Content-Type':
          'application/json',
      },

      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,

        spaceId: data.spaceId,

        objectId:
          data.objectiveId,

        cropId: data.cropId,

        resourceIds:
          data.resourceIds,
      }),
    }
  );
}

export async function anonymousLogin() {
  const response = await fetch(
    'http://localhost:8080/api/auth/anonymous',
    {
      method: 'POST',
    }
  );

  if (!response.ok) {
    throw new Error(
      'Erro ao acessar como visitante'
    );
  }

  return response.json();
}