import {
  useEffect,
  useState,
} from 'react';

import {
  getCropById,
} from '../services/libraryService';

import type {
  Crop,
} from '../types/crop';

export function useCrop(
  id: number
) {

  const [crop, setCrop] =
    useState<Crop | null>(null);

  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {

    async function load() {

      const data =
        await getCropById(id);

      setCrop(data);

      setIsLoading(false);

    }

    load();

  }, [id]);

  return {
    crop,
    isLoading,
  };

}