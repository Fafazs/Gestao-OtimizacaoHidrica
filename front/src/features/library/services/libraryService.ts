import { apiFetch }
from '../../../shared/services/api';

import type {
  Crop,
} from '../types/crop';

export async function getCrops()
: Promise<Crop[]> {

  return apiFetch(
    '/api/library/crops'
  );

}

export async function getCropById(
  id: number
): Promise<Crop> {

  return apiFetch(
    `/api/library/crops/${id}`
  );

}