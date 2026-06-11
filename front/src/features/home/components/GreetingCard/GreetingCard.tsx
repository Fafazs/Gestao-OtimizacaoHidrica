import styles from './GreetingCard.module.css';

interface GreetingCardProps {
  userName: string;
  temperature: string;
  weatherCondition: string;
}

export function GreetingCard({
  userName,
  temperature,
  weatherCondition,
}: GreetingCardProps) {
  return (
    <section className={styles.card}>
      <div>
        <h2>
          Bom dia, {userName}
        </h2>

        <p>
          ☀️ {temperature} • {weatherCondition}
        </p>
      </div>
    </section>
  );
}