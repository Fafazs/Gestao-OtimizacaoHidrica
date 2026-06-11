export interface FieldOverview {
  fieldId: number;

  fieldName: string;

  cropName: string;

  totalTasksToday: number;

  completedTasksToday: number;

  isFullyCompleted: boolean;
}