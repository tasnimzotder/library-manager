import Image from 'next/image';
import BookCard from './BookCard';

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

const BooksGrid = ({ books, ctype }: { books: BookType[]; ctype: string }) => {
  return (
    <div className={'flex flex-row flex-wrap gap-6 justify-center'}>
      {books?.map((book) => (
        <BookCard key={book.code} book={book} ctype={ctype} />
      ))}
    </div>
  );
};

export default BooksGrid;
