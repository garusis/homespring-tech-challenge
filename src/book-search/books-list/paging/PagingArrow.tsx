import { useSearchParams } from 'react-router-dom';
import React from 'react';

type PagingArrowProps = {
  currentPage: number;
  lastPage: number;
  direction: 'left' | 'right';
};

function PagingArrow({ currentPage, direction, lastPage }: PagingArrowProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const isArrowInactive =
    direction === 'left' ? currentPage === 1 : currentPage === lastPage;
  const statusClasses = isArrowInactive
    ? 'bg-zinc-400 pointer-events-none text-white'
    : 'bs-app-paging-button';
  const margin = direction === 'right' ? 'ml-2' : '';

  const handleClick = () => {
    const nextPage = direction === 'left' ? currentPage - 1 : currentPage + 1;
    searchParams.set('page', nextPage.toString());
    setSearchParams(searchParams);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex h-8 w-8 rounded justify-center items-center ${statusClasses} ${margin}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="2 2 20 20"
        stroke="currentColor"
        strokeWidth={2}
      >
        {direction === 'left' ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

export default PagingArrow;
