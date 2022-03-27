import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PagingArrow from './PagingArrow';
import PagingButton from './PagingButton';

export function usePageNumbers(
  currentPage: number,
  lastPage: number,
): Array<number | null> {
  return [1, 2, null, 9, 10];
}

function PagingControl() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get('page');
  const currentPage = Number(pageParam ?? '1');

  useEffect(() => {
    if (!pageParam) {
      setSearchParams({ page: '1' });
    }
  }, [pageParam, setSearchParams]);

  const lastPage = 10;

  const pageNumbers = usePageNumbers(currentPage, lastPage);
  return (
    <div className="my-8 flex justify-center">
      <PagingArrow
        direction="left"
        currentPage={currentPage}
        lastPage={lastPage}
      />
      {pageNumbers.map((pageNumber) => (
        <PagingButton
          key={pageNumber}
          pageNumber={pageNumber}
          currentPage={currentPage}
        />
      ))}
      <PagingArrow
        direction="right"
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </div>
  );
}

export default PagingControl;
