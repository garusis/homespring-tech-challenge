import React from 'react';
import Book from './Book';
import PagingControl from './PagingControl';

function BooksList() {
  return (
    <main className="bs-app-books-list px-6">
      <div>
        <Book />
      </div>
      <PagingControl />
    </main>
  );
}

export default BooksList;
