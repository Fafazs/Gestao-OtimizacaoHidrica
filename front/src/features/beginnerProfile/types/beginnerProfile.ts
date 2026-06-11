export interface BeginnerProfileFormData {
  spaceId: number | null;
  objectiveId: number | null;
  cropId: number | null;

  resourceIds: number[];

  name: string;
  email: string;

  password: string;
  confirmPassword: string;
}