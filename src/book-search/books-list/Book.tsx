import React, { ReactNode } from 'react';
import Star from './Star';
import { BookData } from '../../hooks/useBooks';

type BookProps = { book: BookData };

type AdditionalBookInformationProps = {
  pageCount: number | undefined;
  publishedDate: string | undefined;
  publisher: string | undefined;
};

function AdditionalBookInformation({
  publishedDate,
  publisher,
  pageCount,
}: AdditionalBookInformationProps) {
  const pages = pageCount ? `${pageCount} pages` : null;

  return (
    <h4 className="mt-2 flex text-gray-500 text-sm">
      {[pages, publishedDate, publisher].reduce((arr, elem, index, array) => {
        if (elem) {
          // eslint-disable-next-line react/no-array-index-key
          arr.push(<span key={`elem-${index}`}>{elem}</span>);
          if (index < array.length - 1) {
            arr.push(
              // eslint-disable-next-line react/no-array-index-key
              <span key={`separator-${index}`} className="mx-3">
                •
              </span>,
            );
          }
        }
        return arr;
      }, [] as Array<ReactNode>)}
    </h4>
  );
}

function Book({ book }: BookProps) {
  return (
    <article className="bs-app-book-container py-8">
      <header>
        <div className="h-14 flex items-center">
          <div>
            {book.volumeInfo.imageLinks && (
              <img
                className="h-14"
                src={book.volumeInfo.imageLinks.smallThumbnail}
                alt={`Preview of ${book.volumeInfo.title}`}
              />
            )}
          </div>
          <div className="m-4">
            <h2 className="text-sm text-gray-700">
              {book.volumeInfo.authors?.join(', ')}
            </h2>
            <h3 className="text-xs text-gray-400 mt-1">
              {book.volumeInfo.categories?.join(', ')}
            </h3>
          </div>
        </div>
        <h1 className="text-gray-900 mt-4 font-bold bs-app-book-title">
          {book.volumeInfo.title}
        </h1>
        <div className="mt-2 flex">
          {[1, 2, 3, 4, 5].map((index) => (
            <Star
              key={index}
              index={index}
              currentRating={book.volumeInfo.averageRating || 0}
            />
          ))}
        </div>
        <AdditionalBookInformation
          pageCount={book.volumeInfo.pageCount}
          publishedDate={book.volumeInfo.publishedDate}
          publisher={book.volumeInfo.publisher}
        />
      </header>
      <p className="mt-4 text-gray-500 text-sm">
        {book.volumeInfo.description}
      </p>
    </article>
  );
}

export default Book;
