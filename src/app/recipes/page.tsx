import { Loader } from '@/components/Loader';
import { RecipesList } from '@/components/RecipesList';
import { Suspense } from 'react';

type SearchParams = {
  searchParams: {
    query?: string;
    cuisine?: string;
    maxReadyTime?: string;
  };
};

export default async function RecipesPage({ searchParams }: SearchParams) {
  const { query, cuisine, maxReadyTime } = await searchParams;

  return (
    <Suspense fallback={<Loader />}>
      <RecipesList
        query={query}
        cuisine={cuisine}
        maxReadyTime={maxReadyTime}
      />
    </Suspense>
  );
}
