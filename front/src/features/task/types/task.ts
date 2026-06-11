export interface Task {

  id: number;

  title: string;

  description: string;

  priority: number;

  status: string;

  irrigationDurationMinutes: number;

  field: {
    id: number;

    name: string;

    cropName: string;
  };

}