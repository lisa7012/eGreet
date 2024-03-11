'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/results/${searchQuery}`);
    setSearchQuery('');
  };

  return (
    // TODO: add responsiveness
    <form className="flex flex-row justify-center">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-5">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input h-[40px] w-[602px] bg-[url('../public/search_icon.svg')] bg-[10px_10px] bg-no-repeat pl-8 "
            placeholder="search"
          />
          <button className="btn rounded-md bg-strawberry-600 px-10 py-2 text-base text-white">
            search
          </button>
        </div>
        <p className="text-caption-cl italic text-black">
          photos provided by{' '}
          <Link
            href="https://www.pexels.com"
            target="_blank"
            className="font-medium hover:underline"
          >
            pexels
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SearchBar;
