import { apiFetch }
from '../../../shared/services/api';

import type {
  DashboardSummary,
} from '../types/dashboardSummary';

import type {
  Task,
} from '../types/task';

import type {
  FieldOverview,
} from '../types/fieldOverview';

export async function getSummary() {
  return apiFetch(
    '/api/dashboard/summary'
  ) as Promise<DashboardSummary>;
}

export async function getTodayTasks() {
  return apiFetch(
    '/api/tasks/today'
  ) as Promise<Task[]>;
}

export async function getFieldOverview() {
  return apiFetch(
    '/api/fields/status-overview'
  ) as Promise<FieldOverview[]>;
}