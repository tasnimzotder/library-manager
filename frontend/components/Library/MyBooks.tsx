import BookCard from './BookCard';
import { getMyBooks } from '../../utils/libraryService';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';

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

const MyBooks = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    getMyBooks(user).then((books) => {
      setBooks(books);
    });
  }, [books]);

  return (
    <div>
      <div>
        <h1 className={'py-8 px-[20%] text-2xl text-center'}>My Books</h1>
      </div>

      <hr />
      <div
        className={'flex flex-row flex-wrap gap-6 justify-center py-6 px-10'}
      >
        {books?.map((book) => (
          <BookCard key={book.code} book={book} ctype="remove" />
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
