import styles from './GreetingCard.module.css';

export function GreetingCard() {
  const user = JSON.parse(
    localStorage.getItem('user') || '{}'
  );

  return (
    <section className={styles.card}>
      <div>
        <h2>
          Bom dia, {user.name || 'Produtor'}
        </h2>

        <p>
          ☀️ 28°C • Sem chuva hoje
        </p>
      </div>
    </section>
  );
}