import { spoonacularApiKey, spoonacularApiUrl } from '@/constants';
import { RecipesSearchParams } from '@/types/recipes.types';

import { buildSearchParams } from './buildSearchParams';

export const fetchRecipes = async (params: RecipesSearchParams) => {
  const searchParams = buildSearchParams(params);

  const url = `${spoonacularApiUrl}/recipes/complexSearch?${searchParams}&apiKey=${spoonacularApiKey}`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const data = await res.json();

  return data;
};
