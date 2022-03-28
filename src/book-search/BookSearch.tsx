import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBar from './FilterBar';
import SearchBar from './SearchBar';
import BooksList from './books-list/BooksList';
import { BooksCountContextProvider } from '../hooks/useBooksCount';

function BookSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const filter = searchParams.get('filter');
    const page = searchParams.get('page');
    const search = searchParams.get('search');

    if (filter !== null && page !== null && search !== null) return;
    const defaultParams = {
      filter: '',
      page: '1',
      search: '',
      pageSize: '10',
    };
    setSearchParams(defaultParams);
  }, [searchParams, setSearchParams]);

  return (
    <BooksCountContextProvider>
      <div className="bs-app-main-container container flex mx-auto">
        <FilterBar />
        <div className="bs-app-list-container ml-11 bg-white flex-grow rounded">
          <SearchBar />
          <BooksList />
        </div>
      </div>
    </BooksCountContextProvider>
  );
}

export default BookSearch;
