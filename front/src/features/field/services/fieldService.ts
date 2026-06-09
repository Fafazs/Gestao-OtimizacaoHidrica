import type { Field }
from '../types/field';

import type { CreateFieldDTO }
from '../dto/createFieldDTO';

import {
  createField,
} from '../utils/fieldFactory';

export async function createMyField(
  data: CreateFieldDTO
): Promise<Field> {

  await new Promise(resolve =>
    setTimeout(resolve, 500)
  );

  const field =
    createField(data);

  localStorage.setItem(
    'field',
    JSON.stringify(field)
  );

  return field;
}

export async function getMyField(): Promise<Field> {

  await new Promise(resolve =>
    setTimeout(resolve, 500)
  );

  const storedField =
    localStorage.getItem('field');

  if (!storedField) {
    throw new Error(
      'Campo não encontrado'
    );
  }

  return JSON.parse(storedField);
}