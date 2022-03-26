import React from 'react';

function SearchBar() {
  return (
    <aside>
      <label htmlFor="search-input" className="flex h-14 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-6 text-gray-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          id="search-input"
          className="border-none text-base focus:border-none focus:ring-0 placeholder:text-zinc-400"
          placeholder="Start searching..."
        />
      </label>
    </aside>
  );
}

export default SearchBar;
