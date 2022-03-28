import React from 'react';
import PagingControl from './paging/PagingControl';
import useBooks from '../../hooks/useBooks';
import Book from './Book';

function BooksList() {
  const booksResponse = useBooks();
  return (
    <main className="bs-app-books-list px-6">
      <div>
        {booksResponse.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      <PagingControl />
    </main>
  );
}

export default BooksList;
