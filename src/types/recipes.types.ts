export type Recipe = {
  id: number;
  title: string;
  image: string;
};

export type RecipeDetails = {
  title: string;
  image: string;
  extendedIngredients: { id: number; original: string }[];
  readyInMinutes: number;
  servings: number;
  summary: string;
};

export type RecipesSearchParams = {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string | number;
};
