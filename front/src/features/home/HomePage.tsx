import styles from './HomePage.module.css';

import { GreetingCard } from './components/GreetingCard/GreetingCard';
import { TaskCard } from './components/TaskCard/TaskCard';
import { SuggestionCard } from './components/SugestionCard/SugestionCard';
import { FieldStatusCard } from './components/FieldStatusCard/FieldStatusCard';
import { BottomNavigation } from '../../shared/components/BottomNavigation/BottomNavigation';

import { mockTask } from './data/mockTask';
import { suggestions } from './data/mockSuggestion';

export function HomePage() {
  return (
    <div className={styles.page}>
      <GreetingCard />

      <main className={styles.content}>
        <TaskCard
          cropName={mockTask.cropName}
          irrigationTime={mockTask.irrigationTime}
          fieldName={mockTask.fieldName}
        />

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