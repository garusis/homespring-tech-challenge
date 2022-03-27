import { useSearchParams } from 'react-router-dom';
import React from 'react';

type PagingButtonProps = {
  pageNumber: number | null;
  currentPage: number;
};

function PagingButton({ pageNumber, currentPage }: PagingButtonProps) {
  const [, setSearchParams] = useSearchParams();

  const borderActive = pageNumber === currentPage;
  const handleClick = () => {
    if (!pageNumber) return;
    setSearchParams({ page: pageNumber.toString() });
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex h-8 w-8 ml-2 border rounded justify-center items-center bs-app-paging-button ${
        borderActive ? 'bs-app-paging-button-active' : ''
      } ${pageNumber === null ? 'pointer-events-none' : ''}`}
    >
      <span className="text-sm font-bold">{pageNumber ?? '...'}</span>
    </button>
  );
}

export default PagingButton;
