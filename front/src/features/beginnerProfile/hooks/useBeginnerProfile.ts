import { useState } from 'react';

import type { BeginnerProfileFormData } from '../types/beginnerProfile';

export function useBeginnerProfile() {
  const [currentStep, setCurrentStep] =
    useState(1);

const [formData, setFormData] =
  useState<BeginnerProfileFormData>({
    spaceId: null,
    objectiveId: null,
    cropId: null,

    resourceIds: [],

    name: '',
    email: '',

    password: '',
    confirmPassword: '',
  });

  function nextStep() {
    setCurrentStep(prev => prev + 1);
  }

  function previousStep() {
    setCurrentStep(prev => prev - 1);
  }

  function updateField(
  field: keyof BeginnerProfileFormData,
  value: string | number | null
) {
  setFormData(prev => ({
    ...prev,
    [field]: value,
  }));
}

  function toggleResource(
    resourceId: number
  ) {
    setFormData(prev => ({
      ...prev,

      resourceIds:
        prev.resourceIds.includes(resourceId)
          ? prev.resourceIds.filter(
              id => id !== resourceId
            )
          : [
              ...prev.resourceIds,
              resourceId,
            ],
    }));
  }

  return {
    currentStep,

    formData,

    nextStep,
    previousStep,

    updateField,
    toggleResource,
  };
}