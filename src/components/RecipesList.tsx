import { RecipeCard } from '@/components/RecipeCard';
import { fetchRecipes } from '@/lib/fetchRecipes';
import { Recipe } from '@/types/recipes.types';

type RecipesListProps = {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
};

export async function RecipesList({ ...props }: RecipesListProps) {
  let recipes: Recipe[] = [];

  try {
    const data = await fetchRecipes(props);
    recipes = data.results;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching recipes:', error);
  }

  return (
    <div className='flex justify-center'>
      <div className='p-6 max-w-6xl'>
        <h1 className='text-2xl font-bold mb-4'>Recipes</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {recipes.length > 0 ? (
            recipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p>No recipes found</p>
          )}
        </div>
      </div>
    </div>
  );
}
