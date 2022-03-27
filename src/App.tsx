import React from 'react';
import { Link, Route, Routes, HashRouter } from 'react-router-dom';
import BookSearch from './book-search/BookSearch';
import './App.css';

function NoFound() {
  return (
    <div>
      <h2>NOT FOUND</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BookSearch />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
