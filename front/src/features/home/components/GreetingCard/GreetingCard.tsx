import styles from './GreetingCard.module.css';

export function GreetingCard() {
  return (
    <section className={styles.card}>
      <div>
        <h2>
          Bom dia, Seu João
        </h2>

        <p>
          ☀️ 28°C • Sem chuva hoje
        </p>
      </div>
    </section>
  );
}