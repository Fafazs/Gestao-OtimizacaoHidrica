import styles from './HomePage.module.css';

import { GreetingCard } from './components/GreetingCard/GreetingCard';
import { SuggestionCard } from './components/SugestionCard/SugestionCard';
import { FieldOverviewCard } from '../field/components/FieldOverviewCard/FieldOverviewCard';
import { BottomNavigation } from '../../shared/components/BottomNavigation/BottomNavigation';
import { useSuggestions } from '../suggestion/hooks/useSuggestions';
import { useLogout } from '../auth/hooks/useLogout';
import { useNavigate } from 'react-router-dom';
import { useDashboard } from './hooks/useDashboard';
import { useTasks } from '../task/hooks/useTasks';
import { useFieldOverview } from '../field/hooks/useFieldOverview';
import { useState } from 'react';
import { TaskHero } from '../task/components/TaskHero/TaskHero';
import { TaskIndicators } from '../task/components/TaskIndicators/TaskIndicators';
import { TaskCarouselNavigation } from '../task/components/TaskCarouselNavigation/TaskCarouselNavigation';
import { deleteField }
  from '../field/services/fieldOverviewService';
  import {
  createField
} from '../field/services/fieldOverviewService';

export function HomePage() {
  const navigate = useNavigate();
  const { suggestions } = useSuggestions();
  const { summary, isLoading: isDashboardLoading, } = useDashboard();
  const {
    tasks,
    isLoading: isTasksLoading,
    completeTaskAndRefresh,
  } = useTasks();
  const { fields, isLoading: isFieldOverviewLoading, removeField, loadFields } = useFieldOverview();
  
  const { logout } = useLogout();
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const currentTask = tasks[currentTaskIndex];

  function handleLogout() {
    logout();
    navigate('/');
  }
  async function handleCompleteTask(
  taskId: number
) {

  await completeTaskAndRefresh(
    taskId
  );

  await loadFields();

  if (
    currentTaskIndex >= tasks.length - 1
  ) {
    setCurrentTaskIndex(0);
  }

}
  async function handleCreateField() {

  const fieldName =
    window.prompt(
      'Nome do campo'
    );

  if (!fieldName) {
    return;
  }

  const cropName =
    window.prompt(
      'Nome da cultura'
    );

  if (!cropName) {
    return;
  }

  const user =
    JSON.parse(
      localStorage.getItem('user') || '{}'
    );

  await createField(
    fieldName,
    cropName,
    user.id
  );

  await loadFields();
}
  async function handleDeleteField(
    fieldId: number
  ) {

    const confirmed =
      window.confirm(
        'Deseja excluir este campo?'
      );

    if (!confirmed) {
      return;
    }

    await deleteField(fieldId);

    removeField(fieldId);
  }

  function handleNext() {

    if (
      currentTaskIndex <
      tasks.length - 1
    ) {
      setCurrentTaskIndex(
        currentTaskIndex + 1
      );
    }

  }

  function handlePrevious() {

    if (
      currentTaskIndex > 0
    ) {
      setCurrentTaskIndex(
        currentTaskIndex - 1
      );
    }

  }

  if (
    isDashboardLoading ||
    isTasksLoading ||
    isFieldOverviewLoading
  ) {
    return (
      <div className={styles.page}>
        Carregando...
      </div>
    );
  }


  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <button
  className={styles.logoutButton}
  onClick={handleLogout}
>
  Sair
</button>

        {summary && (
          <GreetingCard
            userName={summary.userName}
            temperature={summary.currentTemperature}
            weatherCondition={summary.weatherCondition}
          />
        )}
      </header>

      <main className={styles.content}>
        <section className={styles.tasks}>

  {tasks.length === 0 ? (

    <section className={styles.emptyTasks}>

      <h2>
        🎉 Parabéns!
      </h2>

      <p>
        Todas as tarefas de hoje foram concluídas.
      </p>

      <small>
        Seus campos estão em dia.
      </small>

    </section>

  ) : (

    <section>

      <TaskHero
        taskId={currentTask.id}
        title={currentTask.title}
        description={currentTask.description}
        fieldName={currentTask.field.name}
        cropName={currentTask.field.cropName}
        irrigationDuration={
          currentTask.irrigationDurationMinutes
        }
        onComplete={
          handleCompleteTask
        }
      />

      <TaskCarouselNavigation
        hasPrevious={
          currentTaskIndex > 0
        }
        hasNext={
          currentTaskIndex <
          tasks.length - 1
        }
        onPrevious={
          handlePrevious
        }
        onNext={
          handleNext
        }
      />

      <TaskIndicators
        total={tasks.length}
        current={
          currentTaskIndex
        }
      />

    </section>

  )}

</section>

        <section className={styles.suggestions}>
          {suggestions.map((suggestion) => (
            <SuggestionCard
              key={suggestion.id}
              title={suggestion.title}
              description={suggestion.description}
            />
          ))}
        </section>

        <section className={styles.fields}>
          <div className={styles.uiField} >
            <p>Meus Campos</p>
            <button
              onClick={handleCreateField}
            >
              + Novo Campo
            </button>
          </div>
          {fields.map(field => (

            <FieldOverviewCard
              key={field.fieldId}
              fieldId={field.fieldId}
              fieldName={field.fieldName}
              cropName={field.cropName}
              completedTasksToday={
                field.completedTasksToday
              }
              totalTasksToday={
                field.totalTasksToday
              }
              onDelete={handleDeleteField}
            />

          ))}

        </section>
      </main>

      <BottomNavigation />
    </div>
  );
}