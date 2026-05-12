import styles from './OnboardingPage.module.css';
import { Header } from '../../components/layout/Header/Header';
import { HeroSection } from '../../components/onboarding/HeroSection/HeroSection';
import { OptionCard } from '../../components/onboarding/OptionCard/OptionCard';
import { ProgressIndicator } from '../../components/onboarding/ProgressIndicator/ProgressIndicator';
import { PlantingModal } from '../../components/onboarding/PlantingModal/PlantingModal';
import { onboardingOptions } from '../../metaData/onboardingOptions';
import { useModal } from '../../hooks/useModal';

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