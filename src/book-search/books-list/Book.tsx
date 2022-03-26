import React from 'react';
import Star from './Star';

function Book() {
  return (
    <article className="bs-app-book-container py-8">
      <header>
        <div className="h-14 flex items-center">
          <div>
            <img
              className="h-14"
              src="https://picsum.photos/200/300"
              alt="Book preview"
            />
          </div>
          <div className="m-4">
            <h2 className="text-sm text-gray-700">Author 1, Author 3</h2>
            <h3 className="text-xs text-gray-400 mt-1">
              Category 1, Category 2
            </h3>
          </div>
        </div>
        <h1 className="text-gray-900 mt-4 font-bold bs-app-book-title">
          Book Title
        </h1>
        <div className="mt-2 flex">
          {[1, 2, 3, 4, 5].map((index) => (
            <Star index={index} currentRating={4} />
          ))}
        </div>
        <h4 className="mt-2 flex text-gray-500 text-sm">
          <span># pages</span>
          <span className="mx-3">•</span>
          <span>year</span>
          <span className="mx-3">•</span>
          <span>Publisher</span>
        </h4>
      </header>
      <p className="mt-4 text-gray-500 text-sm">Description</p>
    </article>
  );
}

export default Book;
