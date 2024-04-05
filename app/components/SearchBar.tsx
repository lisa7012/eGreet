'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery) router.push(`/results/${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <form className="flex flex-row justify-center" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 max-mobile:gap-1">
        <div className="flex flex-row gap-5">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input h-input-cl w-search-cl bg-[url('/search_icon.svg')] bg-[10px_50%] bg-no-repeat pl-8 max-xl:bg-[3%_50%] max-md:pl-7"
            placeholder="search"
          />
          <button
            type="submit"
            className="btn h-input-cl w-search-btn-cl rounded-md bg-strawberry-600 text-search-btn-cl text-white max-md:hidden"
          >
            search
          </button>
        </div>
        <p className="caption">
          photos provided by{' '}
          <Link
            href="https://www.pexels.com"
            target="_blank"
            className="font-medium text-strawberry-600 underline"
          >
            pexels
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SearchBar;
