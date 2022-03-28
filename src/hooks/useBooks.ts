import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import useDebounce from './useDebounce';
import FetchError from '../errors/FetchError';

export type BookData = {
  id: string;
  volumeInfo: Partial<{
    authors: Array<string>;
    categories: Array<string>;
    title: string;
    pageCount: number;
    publishedDate: string;
    publisher: string;
    description: string;
    imageLinks: { smallThumbnail: string };
    averageRating: number;
  }>;
};

type BookQueryResponse = {
  items: Array<BookData>;
  totalItems: number;
};

export default function useBooks() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter');
  const page = Number(searchParams.get('page') ?? '1');
  const pageSize = Number(searchParams.get('pageSize') ?? '10');
  const search = useDebounce(searchParams.get('search'), 400);

  const queryResponse = useQuery<BookQueryResponse>(
    ['books', filter, page, pageSize, search],
    async () => {
      if (!search) return { totalItems: 0, items: [] };

      const urlSearch = new URLSearchParams();
      urlSearch.set('key', process.env.REACT_APP_GOOGLE_BOOKS_API_KEY ?? '');
      urlSearch.set('projection', 'full');
      urlSearch.set('q', search);
      urlSearch.set('startIndex', ((page - 1) * pageSize).toString());
      urlSearch.set('maxResults', pageSize.toString());

      if (filter) {
        urlSearch.set('filter', filter);
      }

      // eslint-disable-next-line no-console
      console.error(
        `${process.env.REACT_APP_BOOKS_API}?${urlSearch.toString()}`,
      );

      const response = await fetch(
        `${process.env.REACT_APP_BOOKS_API}?${urlSearch.toString()}`,
      );
      if (!response.ok) {
        throw new FetchError(response);
      }
      return response.json();
    },
  );

  const data = queryResponse.data || { totalItems: 0, items: [] };

  return data.items;
}
