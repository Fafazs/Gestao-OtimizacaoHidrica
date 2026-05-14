import styles from './OnboardingPage.module.css';
import { Header } from '../../shared/components/Header/Header';
import { HeroSection } from '../../features/onboarding/components/HeroSection/HeroSection';
import { OptionCard } from '../../features/onboarding/components/OptionCard/OptionCard';
import { ProgressIndicator } from '../../features/onboarding/components/ProgressIndicator/ProgressIndicator';
import { PlantingModal } from '../../features/onboarding/components/PlantingModal/PlantingModal';
import { onboardingOptions } from './data/onboardingOptions';
import { useModal } from './hooks/useModal';
import { TextButton } from '../../shared/components/TextButton/TextButton'

export function OnboardingPage() {
  const {
    isOpen,
    openModal,
    closeModal
  } = useModal();

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.content}>
        <HeroSection />

        <section className={styles.options}>
          {onboardingOptions.map(option => (
            <OptionCard
              key={option.id}
              title={option.title}
              icon={option.icon}
              onClick={openModal}
            />
          ))}
        </section>
        <TextButton to="/home">
          Acessar app sem criar perfil
        </TextButton>

        <ProgressIndicator
          currentStep={1}
          totalSteps={4}
        />
      </main>

      <PlantingModal
        isOpen={isOpen}
        onClose={closeModal}
      />
    </div>
  );
}