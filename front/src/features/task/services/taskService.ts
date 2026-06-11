import { apiFetch }
from '../../../shared/services/api';

import type { Task }
from '../types/task';

export async function getTodayTasks(
  userId: number
): Promise<Task[]> {

  return apiFetch(
    `/api/tasks/today?userId=${userId}`
  );

}

export async function completeTask(
  taskId: number
) {

  console.log(
    'ENVIANDO PATCH',
    taskId
  );

  return apiFetch(
    `/api/tasks/${taskId}/complete`,
    {
      method: 'PATCH',
    }
  );

}

export async function createTask(
  title: string,
  description: string,
  fieldId: number
) {

  return apiFetch(
    '/api/tasks',
    {
      method: 'POST',

      headers: {
        'Content-Type':
          'application/json',
      },

      body: JSON.stringify({
        title,
        description,
        fieldId,
      }),
    }
  );

}

export async function getTasksByField(
  fieldId: number
) {

  return apiFetch(
    `/api/fields/${fieldId}/tasks`
  );

}