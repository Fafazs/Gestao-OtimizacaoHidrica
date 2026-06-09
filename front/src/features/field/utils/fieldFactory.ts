import type { CreateFieldDTO }
from '../dto/createFieldDTO';

import type { Field }
from '../types/field';

export function createField(
  data: CreateFieldDTO
): Field {

  const cropMap: Record<number, string> = {
    1: 'Tomate',
    2: 'Alface',
    3: 'Temperos',
    4: 'Cenoura',
    5: 'Morango',
  };

  return {
    id: Date.now(),

    name: 'Meu Primeiro Campo',

    cropName:
      cropMap[data.cropId],

    irrigationDuration: 15,

    nextIrrigationTime: '18:00',

    humidity: 80,
  };
}