import { apiFetch }
from '../../../shared/services/api';

export async function getProfileData() {
  const user =
    JSON.parse(
      localStorage.getItem('user') || '{}'
    );

  const [fields, tasks] = await Promise.all([
    apiFetch(
      `/api/fields/status-overview?userId=${user.id}`
    ),

    apiFetch(
      `/api/tasks/today?userId=${user.id}`
    ),
  ]);

  return {
    name: user.name,
    email: user.email,
    totalFields: fields.length,
    pendingTasks: tasks.length,
  };
}