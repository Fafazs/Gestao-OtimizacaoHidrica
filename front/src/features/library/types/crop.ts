export interface Crop {
  id: number;

  title: string;

  imageUrl: string;

  description: string;

  companionPlants: string[];

  recommendedTemperature: string;

  recommendedHumidity: string;

  soilType: string;
}