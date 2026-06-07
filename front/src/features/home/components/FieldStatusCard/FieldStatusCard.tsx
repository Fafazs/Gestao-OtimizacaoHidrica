import styles from './FieldStatusCard.module.css';

export function FieldStatusCard() {
  return (
    <section className={styles.card}>
      <div className={styles.icon}>
        🌱
      </div>

      <div className={styles.content}>
        <h3>O campo está saudável</h3>

        <p>
          Tudo certo com os seus
          4 canteiros.
        </p>
      </div>
    </section>
  );
}