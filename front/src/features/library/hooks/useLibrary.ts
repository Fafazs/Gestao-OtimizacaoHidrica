import {
  useEffect,
  useState,
} from 'react';

import {
  getCrops,
} from '../services/libraryService';

import type {
  Crop,
} from '../types/crop';

export function useLibrary() {

  const [crops, setCrops] =
    useState<Crop[]>([]);

  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {

    async function load() {

      const data =
        await getCrops();

      setCrops(data);

      setIsLoading(false);

    }

    load();

  }, []);

  return {
    crops,
    isLoading,
  };

}