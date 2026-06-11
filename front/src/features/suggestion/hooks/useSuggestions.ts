import {
  useEffect,
  useState,
} from 'react';

import {
  getSuggestions,
} from '../services/suggestionService';

import type {
  Suggestion,
} from '../types/suggestion';

export function useSuggestions() {

  const [suggestions, setSuggestions] =
    useState<Suggestion[]>([]);

  useEffect(() => {

    async function load() {
      const data =
        await getSuggestions();

      setSuggestions(data);
    }

    load();

  }, []);

  return {
    suggestions,
  };
}