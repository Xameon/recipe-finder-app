'use client';

import { cuisines } from '@/constants/recipes.constants';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function RecipesSearchForm() {
  // ..................................................
  // States

  const [query, setQuery] = useState<string>('');
  const [cuisine, setCuisine] = useState<string>('');
  const [maxTime, setMaxTime] = useState<string>('');

  // ..................................................
  // Misc Hooks

  const router = useRouter();

  // ..................................................
  // Functions

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);
  const handleCuisineChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCuisine(e.target.value);
  const handleMaxTimeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMaxTime(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();

    if (query) queryParams.append('query', query);
    if (cuisine) queryParams.append('cuisine', cuisine);
    if (maxTime) queryParams.append('maxReadyTime', maxTime);

    router.push(`/recipes?${queryParams.toString()}`);
  };

  // ..................................................
  // Variables

  const isFormValid = query || cuisine || maxTime;

  // ..................................................
  // Render

  return (
    <div className='max-w-md mx-auto p-6 shadow-lg rounded-xl'>
      <h2 className='text-2xl text-yellow-700 font-semibold mb-4'>
        Find Your Favorite Recipe
      </h2>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor='query'
            className='block text-sm font-medium text-gray-700'
          >
            Recipe Query
          </label>
          <input
            type='text'
            id='query'
            value={query}
            onChange={handleQueryChange}
            placeholder='pasta'
            className='w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-yellow-500'
          />
        </div>
        <div>
          <label
            htmlFor='cuisine'
            className='block text-sm font-medium text-gray-700'
          >
            Cuisine
          </label>
          <select
            id='cuisine'
            value={cuisine}
            onChange={handleCuisineChange}
            className='w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-yellow-500'
          >
            <option value='' disabled>
              Select Cuisine
            </option>
            {cuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor='maxTime'
            className='block text-sm font-medium text-gray-700'
          >
            Max Preparation Time (minutes)
          </label>
          <input
            type='number'
            id='maxTime'
            value={maxTime}
            onChange={handleMaxTimeChange}
            placeholder='30'
            className='w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-yellow-500'
          />
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            disabled={!isFormValid}
            className={`px-4 py-2 mt-4 w-full text-white rounded-md ${
              isFormValid
                ? 'bg-yellow-500 hover:bg-yellow-600'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
