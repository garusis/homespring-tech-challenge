import React, { ReactNode, useCallback, useContext, useState } from 'react';

type ContextProps = {
  children: ReactNode;
};

export const BooksCountContext = React.createContext(0);
export const SetBooksCountContext = React.createContext<
  (count: number) => void
>(() => void 0);

export function BooksCountContextProvider({ children }: ContextProps) {
  const [booksCount, setBooksCount] = useState(0);
  const handleSetBooksCount = useCallback((count) => setBooksCount(count), []);
  return (
    <SetBooksCountContext.Provider value={handleSetBooksCount}>
      <BooksCountContext.Provider value={booksCount}>
        {children}
      </BooksCountContext.Provider>
    </SetBooksCountContext.Provider>
  );
}

export function useSetBooksCount(newCount: number) {
  const currentCount = useContext(BooksCountContext);
  const setBooksCount = useContext(SetBooksCountContext);

  if (newCount !== currentCount) {
    setBooksCount(newCount);
  }
}

export default function useBooksCount() {
  return useContext(BooksCountContext);
}
