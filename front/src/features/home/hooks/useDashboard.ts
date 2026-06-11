import {
  useEffect,
  useState,
} from 'react';

import {
  getDashboardSummary,
} from '../services/dashboardService';

import type {
  DashboardSummary,
} from '../types/dashboardSummary';

export function useDashboard() {

  const [summary, setSummary] =
    useState<DashboardSummary | null>(null);

  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {

    async function load() {

  const user =
    JSON.parse(
      localStorage.getItem('user') || '{}'
    );

  const data =
    await getDashboardSummary(
      user.id
    );

  setSummary(data);

  setIsLoading(false);
}

    load();

  }, []);

  return {
    summary,
    isLoading,
  };
}