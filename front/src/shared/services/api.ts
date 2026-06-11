const API_URL =
  'http://localhost:8080';

export async function apiFetch(
  endpoint: string,
  options?: RequestInit
) {
  const response = await fetch(
    `${API_URL}${endpoint}`,
    options
  );

  if (!response.ok) {
    const text =
      await response.text();

    console.error(text);

    throw new Error(
      `Erro ${response.status}: ${text}`
    );
  }

  return response.json();
}