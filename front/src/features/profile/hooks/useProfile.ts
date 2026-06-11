import {
  useEffect,
  useState,
} from 'react';

import {
  getProfileData,
} from '../services/profileService';

import type {
  Profile,
} from '../types/profile';

export function useProfile() {

  const [profile, setProfile] =
    useState<Profile | null>(null);

  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {

    async function load() {

      const data =
        await getProfileData();

      setProfile(data);

      setIsLoading(false);

    }

    load();

  }, []);

  return {
    profile,
    isLoading,
  };

}