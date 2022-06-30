import BooksGrid from './BooksGrid';
import { Autocomplete, Loader } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { getBooks } from '../../utils/libraryService';
import { useRouter } from 'next/router';
// import { books } from '../../data/books';

type BookType = {
  code: number;
  title: string;
  author: string;
  publisher: string;
  year: string;
  language: string;
  cover: string;
  genre?: string;
};

const LibraryView = () => {
  const timeoutRef = useRef<number>(-1);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const [displayedData, setDisplayedData] = useState<BookType[]>([]);
  const [books, setBooks] = useState<BookType[]>([]);

  const router = useRouter();

  useEffect(() => {
    getBooks().then((books) => {
      setBooks(books);
    });
  }, [books, router.pathname]);

  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length < 3) {
      setLoading(false);
      setDisplayedData(books);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(
          books
            .filter((book) =>
              book.title.toLowerCase().includes(val.toLowerCase())
            )
            .map((book) => String(book.title))
        );
        setDisplayedData(
          books.filter((book) =>
            book.title.toLowerCase().includes(val.toLowerCase())
          )
        );
      }, 500);
    }
  };

  const ClearSearch = () => {
    const handleClearSearch = () => {
      setValue('');
      setData([]);
      setDisplayedData(books);
    };

    return (
      <>
        {value.length > 0 ? (
          <span
            onClick={() => handleClearSearch()}
            className={'cursor-pointer'}
          >
            ❌
          </span>
        ) : null}
      </>
    );
  };

  return (
    <div className={'w-full'}>
      <div
        className={
          'pb-9 flex flex-row justify-center flex-wrap gap-10 items-baseline'
        }
      >
        <div className={'max-w-md w-1/2'}>
          <Autocomplete
            value={value}
            data={data}
            onChange={handleChange}
            rightSection={loading ? <Loader size={16} /> : <ClearSearch />}
            label="Search Books"
            placeholder="Type a Book name"
          />
        </div>
      </div>

      <BooksGrid
        ctype="add"
        books={displayedData.length == 0 ? books : displayedData}
      />
    </div>
  );
};

export default LibraryView;
