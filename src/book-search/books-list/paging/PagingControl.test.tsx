import { InvalidPageNumber, usePageNumbers } from './PagingControl';

describe('usePageNumbers', () => {
  it('Throws when currentPage is higher than last page', () => {
    try {
      usePageNumbers(2, 1);
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidPageNumber);
    }
  });

  it('Generates the exact amount of pages, when last page is less or equal than 5', () => {
    expect(usePageNumbers(1, 1)).toEqual([1]);
    expect(usePageNumbers(1, 2)).toEqual([1, 2]);
    expect(usePageNumbers(1, 3)).toEqual([1, 2, 3]);
    expect(usePageNumbers(1, 4)).toEqual([1, 2, 3, 4]);
    expect(usePageNumbers(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('Generates only the first 2 pages, followed by null null and then the last 2 pages when currentPage is any of those options', () => {
    expect(usePageNumbers(1, 10)).toEqual([1, 2, null, 9, 10]);
    expect(usePageNumbers(2, 8)).toEqual([1, 2, null, 7, 8]);
    expect(usePageNumbers(9, 10)).toEqual([1, 2, null, 9, 10]);
    expect(usePageNumbers(7, 8)).toEqual([1, 2, null, 7, 8]);
  });

  it('Keeps always the first and last page visible and currentPage when it is in the middle', () => {
    expect(usePageNumbers(3, 10)).toEqual([1, null, 3, null, 10]);
    expect(usePageNumbers(4, 10)).toEqual([1, null, 4, null, 10]);
    expect(usePageNumbers(5, 10)).toEqual([1, null, 5, null, 10]);
    expect(usePageNumbers(6, 10)).toEqual([1, null, 6, null, 10]);
    expect(usePageNumbers(7, 10)).toEqual([1, null, 7, null, 10]);
    expect(usePageNumbers(8, 10)).toEqual([1, null, 8, null, 10]);
  });
});
