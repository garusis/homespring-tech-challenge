import React from 'react';
import FilterBar from './FilterBar';
import SearchBar from './SearchBar';
import BooksList from './books-list/BooksList';

function BookSearch() {
  return (
    <div className="bs-app-main-container container flex mx-auto">
      <FilterBar />
      <div className="bs-app-list-container ml-11 bg-white flex-grow rounded">
        <SearchBar />
        <BooksList />
      </div>
    </div>
  );
}

export default BookSearch;
