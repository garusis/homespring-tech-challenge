import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<BookSearch />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
