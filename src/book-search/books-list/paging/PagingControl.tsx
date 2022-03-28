import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PagingArrow from './PagingArrow';
import PagingButton from './PagingButton';
import InvalidPageNumberError from '../../../errors/InvalidPageNumberError';
import useBooksCount from '../../../hooks/useBooksCount';

export function usePageNumbers(
  currentPage: number,
  lastPage: number,
): Array<number | null> {
  if (currentPage > lastPage) {
    throw new InvalidPageNumberError();
  }

  if (lastPage <= 5) {
    return Array.from(Array(lastPage), (_, index) => index + 1);
  }

  if (currentPage <= 2 || currentPage >= lastPage - 1) {
    return [1, 2, null, lastPage - 1, lastPage];
  }

  return [1, null, currentPage, null, lastPage];
}

function PagingControl() {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page') ?? '1');
  const pageSize = Number(searchParams.get('pageSize') ?? '10');
  const totalItems = useBooksCount();
  const lastPage = Math.ceil(totalItems / pageSize) || 1;
  const pageNumbers = usePageNumbers(currentPage, lastPage);

  return (
    <div className="my-8 flex justify-center">
      <PagingArrow
        direction="left"
        currentPage={currentPage}
        lastPage={lastPage}
      />
      {pageNumbers.map((pageNumber, index) => (
        <PagingButton
          key={pageNumber ?? `unknown-${index}`}
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
