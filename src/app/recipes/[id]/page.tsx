import { Loader } from '@/components/Loader';
import { RecipeDetails } from '@/components/RecipeDetails';
import { Suspense } from 'react';

export default async function RecipeDetailsPage({
  params: paramsAsync,
}: {
  params: { id: string };
}) {
  const params = await paramsAsync;

  return (
    <Suspense fallback={<Loader />}>
      <RecipeDetails id={params.id} />
    </Suspense>
  );
}
