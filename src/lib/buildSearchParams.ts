import { RecipesSearchParams } from '@/types/recipes.types';

export const buildSearchParams = (params: RecipesSearchParams) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value != null && value !== '') {
      searchParams.set(key, String(value));
    }
  });

  return searchParams.toString();
};
