import styles from './OnboardingPage.module.css';

import { Header } from '../../shared/components/Header/Header';
import { HeroSection } from '../../features/onboarding/components/HeroSection/HeroSection';
import { OptionCard } from '../../features/onboarding/components/OptionCard/OptionCard';

import { onboardingOptions } from './data/onboardingOptions';

import { useNavigate } from 'react-router-dom';

import {
  useAnonymousLogin,
} from '../auth/hooks/useAnonymousLogin';

export function OnboardingPage() {
  const navigate = useNavigate();

  const {
    submit,
  } = useAnonymousLogin();

  async function handleAnonymousAccess() {
    try {
      await submit();

      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  }

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
              to={option.route}
            />
          ))}
        </section>

        <button
  type="button"
  className={styles.guestButton}
  onClick={handleAnonymousAccess}
>
  Acessar app sem criar perfil
</button>
      </main>
    </div>
  );
}