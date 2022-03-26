import React from 'react';

function FilterBar() {
  return (
    <aside className="w-64">
      <header className="font-bold text-base">
        <label htmlFor="categories-filter">Filter your results</label>
      </header>
      <select
        id="categories-filter"
        className="block mt-3 w-full rounded bg-white border-gray-300 text-sm text-zinc-500 py-2 focus:border-gray-400 focus:ring-0"
      >
        <option>All books</option>
        <option>All</option>
        <option>books</option>
      </select>
    </aside>
  );
}

export default FilterBar;
