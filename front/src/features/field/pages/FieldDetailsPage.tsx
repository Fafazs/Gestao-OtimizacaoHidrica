import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import styles from './FieldDetailsPage.module.css';

import {
  useFieldDetails,
} from '../hooks/useFieldDetails';

export function FieldDetailsPage() {

  const navigate = useNavigate();

  const { id } = useParams();

  const fieldId =
    Number(id);

  const {
    field,
    tasks,
    isLoading,
    completeTaskAndRefresh,
    createTaskAndRefresh,
  } = useFieldDetails(fieldId);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!field) {
    return <div>Campo não encontrado</div>;
  }

  const progress =
    field.totalTasksToday > 0
      ? Math.round(
          (
            field.completedTasksToday /
            field.totalTasksToday
          ) * 100
        )
      : 0;

  return (

    <div className={styles.page}>

      <header className={styles.header}>

  <button
    className={styles.backButton}
    onClick={() => navigate('/home')}
  >
    ←
  </button>
  <div>

  <div className={styles.avatar}>
    🌱
  </div>

  <div className={styles.titleGroup}>
</div>
    <h1>
      {field.cropName}
    </h1>
  </div>

</header>

      <section className={styles.hero}>

        <div className={styles.overlay}>

          <span className={styles.badge}>
            🌼 Dia 45
          </span>

          <h2>
            {field.cropName}
          </h2>

          <p>
            Campo: {field.fieldName}
          </p>

        </div>

      </section>

      <main className={styles.content}>

        <section
          className={styles.progressCard}
        >

          <div>

            <h2>
              Seu progresso
            </h2>

            <p>
              {field.completedTasksToday}
              /
              {field.totalTasksToday}
              tarefas concluídas
            </p>

          </div>

          <strong>
            {progress}%
          </strong>

        </section>

        <button
          className={styles.addButton}
          onClick={async () => {

            const title =
              window.prompt(
                'Título da tarefa'
              );

            if (!title) return;

            const description =
              window.prompt(
                'Descrição'
              ) || '';

            await createTaskAndRefresh(
              title,
              description
            );

          }}
        >
          ➕ Nova tarefa
        </button>

        <section>

          <h2
            className={styles.sectionTitle}
          >
            Manejo de hoje
          </h2>

          {tasks.length === 0 ? (

            <div
              className={
                styles.completedCard
              }
            >

              <h3>
                🎉 Campo Finalizado
              </h3>

              <p>
                Todas as tarefas foram
                concluídas.
              </p>

            </div>

          ) : (

            tasks.map(task => (

              <article
                key={task.id}
                className={styles.taskCard}
              >

                <div className={styles.taskHeader}>
  <span className={styles.status}>
    {task.status === 'CONCLUIDO'
      ? '✅'
      : '💧'}
  </span>

  <strong>{task.title}</strong>
</div>

                <p>
                  {task.description}
                </p>

                {task.status !==
                  'CONCLUIDO' && (

                  <button
                    className={styles.completeButton}
                    onClick={() =>
                      completeTaskAndRefresh(
                        task.id
                      )
                    }
                  >
                    Concluir tarefa
                  </button>

                )}

              </article>

            ))

          )}

        </section>

      </main>

    </div>

  );

}