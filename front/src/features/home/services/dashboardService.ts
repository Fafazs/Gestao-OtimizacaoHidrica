import { apiFetch }
from '../../../shared/services/api';

import type {
  DashboardSummary,
} from '../types/dashboardSummary';

export async function getDashboardSummary(
  userId: number
) {

  return apiFetch(
    `/api/dashboard/summary?userId=${userId}`
  );

}