import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bs-app-main-container container flex mx-auto">
      <aside className="w-64">
        <header className="font-bold text-base">Filter your results</header>
        <select className="block mt-3 w-full rounded bg-white border-gray-300 text-sm text-zinc-500 py-2 focus:border-gray-400 focus:ring-0">
          <option>All books</option>
          <option>All</option>
          <option>books</option>
        </select>
      </aside>
      <div className="bs-app-list-container ml-11 bg-white flex-grow rounded">
        <aside>
          <input type="text" />
        </aside>
        <main>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
            </header>
          </article>
        </main>
      </div>
    </div>
  );
}

export default App;
