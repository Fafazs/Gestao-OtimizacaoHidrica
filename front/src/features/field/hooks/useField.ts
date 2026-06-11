import {
  useEffect,
  useState,
} from 'react';

import {
  getMyField,
} from '../services/fieldService';

import type {
  Field,
} from '../types/field';

export function useField() {
  const [field, setField] =
    useState<Field | null>(null);

  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      const data =
        await getMyField();

      setField(data);

      setIsLoading(false);
    }

    load();
  }, []);

  return {
    field,
    isLoading,
  };
}