import styles from './BeginnerProfilePage.module.css';

import { Header } from '../../shared/components/Header/Header';
import { StepNavigation } from '../../shared/components/StepNavigation/StepNavigation';

import { StepHeader } from './components/StepHeader/StepHeader';

import { SpaceStep } from './components/Steps/SpaceStep/SpaceStep';
import { ObjectiveStep } from './components/Steps/ObjectiveStep/ObjectiveStep';
import { CropStep } from './components/Steps/CropStep/CropStep';
import { ResourceStep } from './components/Steps/ResourceStep/ResourceStep';
import { AccountStep } from './components/Steps/AccountStep/AccountStep';

import { useBeginnerProfile } from './hooks/useBeginnerProfile';
import { useNavigate } from 'react-router-dom';

export function BeginnerProfilePage() {
  const {
    currentStep,
    formData,

    nextStep,
    previousStep,

    updateField,
    toggleResource,
  } = useBeginnerProfile();
  const navigate = useNavigate();
  const stepTitles = {
    1: {
      title: 'Onde você pretende plantar?',
      description:
        'Escolha o espaço que você possui hoje.',
    },

    2: {
      title: 'Qual é seu objetivo?',
      description:
        'Vamos entender o que você busca com sua horta.',
    },

    3: {
      title: 'O que você quer plantar?',
      description:
        'Escolha uma cultura para começarmos.',
    },

    4: {
      title: 'O que você já possui?',
      description:
        'Isso ajuda a montar recomendações realistas.',
    },

    5: {
      title: 'Crie sua conta',
      description:
        'Salve seu perfil e continue sua jornada.',
    },
  };

  const currentHeader =
    stepTitles[currentStep as keyof typeof stepTitles];

  return (
    <div className={styles.page}>
      <Header
  showBackButton
  onBack={() => navigate('/')}
/>

      <main className={styles.content}>
        <StepHeader
          currentStep={currentStep}
          totalSteps={5}
          title={currentHeader.title}
          description={currentHeader.description}
        />

        <section className={styles.options}>
          {currentStep === 1 && (
            <SpaceStep
              selectedValue={formData.spaceId}
              onSelect={(value) =>
                updateField('spaceId', value)
              }
            />
          )}

          {currentStep === 2 && (
            <ObjectiveStep
              selectedValue={formData.objectiveId}
              onSelect={(value) =>
                updateField('objectiveId', value)
              }
            />
          )}

          {currentStep === 3 && (
            <CropStep
              selectedValue={formData.cropId}
              onSelect={(value) =>
                updateField('cropId', value)
              }
            />
          )}

          {currentStep === 4 && (
            <ResourceStep
              selectedValue={formData.resourceIds}
              onToggle={toggleResource}
            />
          )}

          {currentStep === 5 && (
  <AccountStep
    name={formData.name}
    email={formData.email}
    password={formData.password}
    confirmPassword={formData.confirmPassword}

    onNameChange={(value) =>
      updateField('name', value)
    }

    onEmailChange={(value) =>
      updateField('email', value)
    }

    onPasswordChange={(value) =>
      updateField('password', value)
    }

    onConfirmPasswordChange={(value) =>
      updateField('confirmPassword', value)
    }
  />
)}
        </section>

        <StepNavigation
          showPrevious={currentStep > 1}
          onPrevious={previousStep}
          onNext={nextStep}
          disableNext={
  (currentStep === 1 && !formData.spaceId) ||

  (currentStep === 2 && !formData.objectiveId) ||

  (currentStep === 3 && !formData.cropId) ||

  (currentStep === 4 &&
    formData.resourceIds.length === 0) ||

  (currentStep === 5 &&
  (
    !formData.name ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword ||
    formData.password !== formData.confirmPassword
  ))
}
        />
      </main>
    </div>
  );
}