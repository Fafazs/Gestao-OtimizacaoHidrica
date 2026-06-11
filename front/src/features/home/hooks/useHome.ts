import {
  useEffect,
  useState,
} from 'react';

import {
  getSummary,
  getTodayTasks,
  getFieldOverview,
} from '../services/homeService';

import type {
  DashboardSummary,
} from '../types/dashboardSummary';

import type {
  Task,
} from '../types/task';

import type {
  FieldOverview,
} from '../types/fieldOverview';

export function useHome() {
  const [summary, setSummary] =
    useState<DashboardSummary | null>(null);

  const [tasks, setTasks] =
    useState<Task[]>([]);

  const [fields, setFields] =
    useState<FieldOverview[]>([]);

  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [
          summaryData,
          tasksData,
          fieldsData,
        ] = await Promise.all([
          getSummary(),
          getTodayTasks(),
          getFieldOverview(),
        ]);

        setSummary(summaryData);
        setTasks(tasksData);
        setFields(fieldsData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, []);

  return {
    summary,
    tasks,
    fields,
    isLoading,
  };
}