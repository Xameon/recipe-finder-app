import { spoonacularApiKey, spoonacularApiUrl } from '@/constants';

export const fetchRecipeDetails = async (id: string) => {
  const url = `${spoonacularApiUrl}/recipes/${id}/information?apiKey=${spoonacularApiKey}`;

  const res = await fetch(url, { next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = await res.json();

  return data;
};
