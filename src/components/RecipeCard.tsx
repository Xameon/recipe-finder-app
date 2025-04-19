'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Recipe } from '@/types/recipes.types';

type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/recipes/${recipe.id}`)}
      className='cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition'
    >
      <Image
        src={recipe.image}
        alt={recipe.title}
        className='w-full h-48 object-cover'
        width={100}
        height={100}
      />
      <div className='p-2'>
        <h2 className='text-md font-semibold text-yellow-800'>
          {recipe.title}
        </h2>
      </div>
    </div>
  );
}
