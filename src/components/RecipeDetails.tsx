import { fetchRecipeDetails } from '@/lib/fetchRecipeDetails';
import { type RecipeDetails } from '@/types/recipes.types';
import Image from 'next/image';

export async function RecipeDetails({ id }: { id: string }) {
  let recipe: RecipeDetails | null = null;

  try {
    recipe = (await fetchRecipeDetails(id)) as RecipeDetails;
  } catch {
    return (
      <div className='text-center mt-8'>
        <h2 className='text-xl font-bold text-gray-800 mb-2'>
          Oops! Something went wrong!
        </h2>
        <p className='text-md text-gray-600'>
          We couldn’t fetch the recipe details. Please try again later or check
          your internet connection.
        </p>
      </div>
    );
  }

  return (
    <div className='max-w-3xl mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>{recipe.title}</h1>

      {recipe.image && (
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={800}
          height={600}
          className='w-full h-auto rounded-lg mb-4'
        />
      )}

      <p className='text-sm text-gray-600 mb-2'>
        Ready in {recipe.readyInMinutes} minutes | Servings: {recipe.servings}
      </p>

      <div
        className='prose prose-sm mb-6'
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      />

      <h2 className='text-xl font-semibold mb-2'>Ingredients:</h2>
      <ul className='list-disc list-inside space-y-1'>
        {recipe.extendedIngredients.map((ing, idx) => (
          // The ingredients have the same IDs, so I'm using indexes instead.
          <li key={Symbol(idx).toString()}>{ing.original}</li>
        ))}
      </ul>
    </div>
  );
}
