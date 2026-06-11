import { apiFetch }
from '../../../shared/services/api';

import type {
  FieldOverview,
} from '../types/fieldOverview';

export async function getFieldOverview(
  userId: number
) {

  return apiFetch(
    `/api/fields/status-overview?userId=${userId}`
  );

}

export async function deleteField(
  fieldId: number
) {

  return apiFetch(
    `/api/fields/${fieldId}`,
    {
      method: 'DELETE',
    }
  );

}

export async function createField(
  fieldName: string,
  cropName: string,
  userId: number
) {

  return apiFetch(
    '/api/fields',
    {
      method: 'POST',

      headers: {
        'Content-Type':
          'application/json',
      },

      body: JSON.stringify({
        fieldName,
        cropName,
        userId,
      }),
    }
  );

}