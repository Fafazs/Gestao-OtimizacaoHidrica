import type { Suggestion }
from '../types/suggestion';

export async function getSuggestions():
Promise<Suggestion[]> {

  await new Promise(resolve =>
    setTimeout(resolve, 500)
  );

  return [
    {
      id: 1,
      title: 'Irrigação Inteligente',
      description:
        'Regue pela manhã para evitar evaporação.'
    },

    {
      id: 2,
      title: 'Adubação',
      description:
        'Sua cultura pode precisar de nutrientes.'
    },
  ];
}