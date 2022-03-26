import React from 'react';

type PagingButtonProps = {
  pageNumber: number | null;
  currentPage: number;
};

type PagingArrowProps = {
  currentPage: number;
  lastPage: number;
  direction: 'left' | 'right';
};

function PagingButton({ pageNumber, currentPage }: PagingButtonProps) {
  const borderActive = pageNumber === currentPage;
  return (
    <a
      href="test"
      className={`flex h-8 w-8 ml-2 border rounded justify-center items-center bs-app-paging-button ${
        borderActive ? 'bs-app-paging-button-active' : ''
      }`}
    >
      <span className="text-sm font-bold">{pageNumber ?? '...'}</span>
    </a>
  );
}

function PagingArrow({ currentPage, direction, lastPage }: PagingArrowProps) {
  const isArrowInactive =
    direction === 'left' ? currentPage === 1 : currentPage === lastPage;
  const statusClasses = isArrowInactive
    ? 'bg-zinc-400 pointer-events-none text-white'
    : 'bs-app-paging-button';
  const margin = direction === 'right' ? 'ml-2' : '';
  return (
    <a
      href="test"
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
    </a>
  );
}

function PagingControl() {
  const currentPage = 1;
  const lastPage = 10;
  return (
    <div className="my-8 flex justify-center">
      <PagingArrow
        direction="left"
        currentPage={currentPage}
        lastPage={lastPage}
      />
      <PagingButton pageNumber={1} currentPage={currentPage} />
      <PagingButton pageNumber={2} currentPage={currentPage} />
      <PagingButton pageNumber={null} currentPage={currentPage} />
      <PagingButton pageNumber={8} currentPage={currentPage} />
      <PagingButton pageNumber={9} currentPage={currentPage} />
      <PagingArrow
        direction="right"
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </div>
  );
}

export default PagingControl;
