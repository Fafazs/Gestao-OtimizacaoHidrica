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

export function useFieldOverview() {

  const [fields, setFields] =
    useState<FieldOverview[]>([]);

  const [isLoading, setIsLoading] =
    useState(true);

  async function loadFields() {

  const user =
    JSON.parse(
      localStorage.getItem('user') || '{}'
    );

  const data =
    await getFieldOverview(
      user.id
    );

  setFields(data);

  setIsLoading(false);
}

  function removeField(
    fieldId: number
  ) {

    setFields(current =>
      current.filter(
        field =>
          field.fieldId !== fieldId
      )
    );

  }

  useEffect(() => {

    loadFields();

  }, []);

  return {
    fields,
    isLoading,

    loadFields,
    removeField,
  };
}