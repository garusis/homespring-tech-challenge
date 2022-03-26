import React from 'react';
import Star from './Star';

function Book() {
  return (
    <article>
      <header>
        <div>
          <div>
            <img src="https://lol.com" alt="Book preview" />
          </div>
          <div>
            <h2>Author 1, Author 3</h2>
            <h3>Category 1, Category 2</h3>
          </div>
        </div>
        <h1>Book Title</h1>
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <h4>
          <span># pages</span>
          <span>.</span>
          <span>year</span>
          <span>.</span>
          <span>Publisher</span>
        </h4>
      </header>
      <p>Description</p>
    </article>
  );
}

export default Book;
