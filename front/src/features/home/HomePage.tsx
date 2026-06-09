import styles from './HomePage.module.css';

import { GreetingCard } from './components/GreetingCard/GreetingCard';
import { TaskCard } from './components/TaskCard/TaskCard';
import { SuggestionCard } from './components/SugestionCard/SugestionCard';
import { FieldStatusCard } from './components/FieldStatusCard/FieldStatusCard';

import { BottomNavigation } from '../../shared/components/BottomNavigation/BottomNavigation';

import { useSuggestions } from '../suggestion/hooks/useSuggestions';

import { useLogout } from '../auth/hooks/useLogout';
import { useNavigate } from 'react-router-dom';

import { useField } from '../field/hooks/useField';


export function HomePage() {
  const navigate = useNavigate();
  const { suggestions } = useSuggestions();

  const { logout } = useLogout();

  const {
    field,
    isLoading,
  } = useField();

  function handleLogout() {
    logout();
    navigate('/');
  }

  if (isLoading) {
    return (
      <div className={styles.page}>
        Carregando...
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <button onClick={handleLogout}>
          Sair
        </button>

        <GreetingCard />
      </header>

      <main className={styles.content}>
        {field && (
          <TaskCard
            cropName={field.cropName}
            irrigationTime={field.irrigationDuration}
            fieldName={field.name}
          />
        )}

        <section className={styles.suggestions}>
          {suggestions.map((suggestion) => (
            <SuggestionCard
              key={suggestion.id}
              title={suggestion.title}
              description={suggestion.description}
            />
          ))}
        </section>

        <FieldStatusCard />
      </main>

      <BottomNavigation />
    </div>
  );
}