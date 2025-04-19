import { RecipesSearchForm } from '@/components/RecipesSearchForm';

export default function Home() {
  return (
    <div className='overflow-hidden py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl flex items-center px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pt-4 lg:pr-8'>
            <div className='lg:max-w-lg'>
              <p className='mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl'>
                Recipe Finder
              </p>
              <p className='mt-6 text-lg/8 text-gray-600'>
                Welcome to the Recipe Finder! Easily search for your favorite
                recipes by cuisine, ingredients, and preparation time. Explore a
                wide range of recipes, view detailed instructions, and find the
                perfect dish for any occasion. Start discovering delicious
                recipes now!
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none'></dl>
            </div>
          </div>
          <RecipesSearchForm />
        </div>
      </div>
    </div>
  );
}
