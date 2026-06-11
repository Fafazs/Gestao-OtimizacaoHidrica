import {
  useEffect,
  useState,
} from 'react';

import {
  getFieldOverview,
} from '../services/fieldOverviewService';

import type {
  FieldOverview,
} from '../types/fieldOverview';

import type {
  Task,
} from '../../task/types/task';

import {
  getTasksByField,
  completeTask,
  createTask,
} from '../../task/services/taskService';

export function useFieldDetails(
  fieldId: number
) {

  const [field, setField] =
    useState<FieldOverview | null>(null);

  const [tasks, setTasks] =
    useState<Task[]>([]);

  const [isLoading, setIsLoading] =
    useState(true);

  async function load() {

    const user =
      JSON.parse(
        localStorage.getItem('user') || '{}'
      );

   const fields: FieldOverview[] =
  await getFieldOverview(
    user.id
  );

const fieldTasks =
  await getTasksByField(
    fieldId
  );

    const selectedField =
  fields.find(
    field =>
      field.fieldId === fieldId
  ) || null;


    setField(selectedField);

    setTasks(fieldTasks);

    setIsLoading(false);

  }

  async function completeTaskAndRefresh(
    taskId: number
  ) {

    await completeTask(taskId);

    await load();

  }

  async function createTaskAndRefresh(
    title: string,
    description: string
  ) {

    await createTask(
      title,
      description,
      fieldId
    );

    await load();

  }

  useEffect(() => {
    load();
  }, [fieldId]);

  return {
    field,
    tasks,
    isLoading,
    completeTaskAndRefresh,
    createTaskAndRefresh,
  };

}