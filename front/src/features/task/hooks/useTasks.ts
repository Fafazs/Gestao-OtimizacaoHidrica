import {
  useEffect,
  useState,
} from 'react';

import {
  getTodayTasks,
  completeTask,
} from '../services/taskService';

import type {
  Task,
} from '../types/task';

export function useTasks() {

  const [tasks, setTasks] =
    useState<Task[]>([]);

  const [isLoading, setIsLoading] =
    useState(true);

  async function loadTasks() {

    const user =
      JSON.parse(
        localStorage.getItem('user') || '{}'
      );

    const data =
      await getTodayTasks(
        user.id
      );

    setTasks(data);

    setIsLoading(false);
  }

  async function completeTaskAndRefresh(
    taskId: number
  ) {

    await completeTask(taskId);

    await loadTasks();

  }

  useEffect(() => {
    loadTasks();
  }, []);

  return {
    tasks,
    isLoading,
    loadTasks,
    completeTaskAndRefresh,
  };
}