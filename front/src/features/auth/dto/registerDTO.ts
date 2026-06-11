export interface RegisterDTO {
  name: string;
  email: string;
  password: string;

  spaceId: number;
  objectiveId: number;
  cropId: number;

  resourceIds: number[];
}