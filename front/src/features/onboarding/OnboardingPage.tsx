import styles from './OnboardingPage.module.css';
import { Header } from '../../shared/components/Header/Header';
import { HeroSection } from '../../features/onboarding/components/HeroSection/HeroSection';
import { OptionCard } from '../../features/onboarding/components/OptionCard/OptionCard';
import { onboardingOptions } from './data/onboardingOptions';
import { TextButton } from '../../shared/components/TextButton/TextButton'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/hooks/useAuth';

export function OnboardingPage() {
  const navigate = useNavigate();

const { login } = useAuth();

function handleAnonymousAccess() {
  login(
    'anonymous-token',
    {
      id: 0,
      name: 'Visitante',
      email: '',
    }
  );

  navigate('/home');
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

        <TextButton
          onClick={handleAnonymousAccess}
        >
          Acessar app sem criar perfil
        </TextButton>
      </main>
    </div>
  );
}