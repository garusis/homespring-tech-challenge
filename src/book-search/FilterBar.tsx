import React, { SyntheticEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

function FilterBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');
  const filterValue = filterParam ?? '';

  const handleChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    searchParams.set('filter', event.currentTarget.value);
    setSearchParams(searchParams);
  };

  return (
    <aside className="w-64 min-w-[16rem]">
      <header className="font-bold text-base">
        <label htmlFor="categories-filter">Filter your results</label>
      </header>
      <select
        id="categories-filter"
        className="block mt-3 w-full rounded bg-white border-gray-300 text-sm text-zinc-500 py-2 focus:border-gray-400 focus:ring-0"
        value={filterValue}
        onChange={handleChange}
      >
        <option value="">All books</option>
        <option value="ebooks">eBooks</option>
        <option value="paid-ebooks">Paid eBooks</option>
        <option value="free-ebooks">Free eBooks</option>
        <option value="partial">Books partially previewable</option>
        <option value="full">Books totally viewable</option>
      </select>
    </aside>
  );
}

export default FilterBar;
