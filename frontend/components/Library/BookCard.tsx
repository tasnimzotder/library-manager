import Image from 'next/image';
import { useAuth } from '../../context/authContext';
import { addToMyBooks, returnBook } from '../../utils/libraryService';

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

const BookCard = ({ book, ctype }: { book: BookType; ctype: string }) => {
  const cover_size = 256;
  const { user } = useAuth();

  const handleAddBorrowingBook = (book_code: number) => {
    addToMyBooks(user, book_code);
  };
  const handleRemoveBorrowingBook = (book_code: number) => {
    returnBook(user, book_code);
  };

  return (
    <div className={`bg-gray-200 rounded-md w-[256px]`}>
      <div className={''}>
        <Image
          src={book.cover}
          height={cover_size}
          width={cover_size}
          objectFit="cover"
          className={'rounded-t-md'}
        />
      </div>
      <div className={'px-6 py-2 flex flex-col justify-between'}>
        <div>
          <div className={'text-lg font-medium py-2 break-all'}>
            <span>{book.title}</span>
          </div>
          <div>
            Author: <span className={'font-medium'}>{book.author}</span>
          </div>
          <div>
            Publisher: <span className={'font-medium'}>{book.publisher}</span>
          </div>
          <div className={'flex flex-row justify-evenly py-3'}>
            <span>{book.year}</span>
            <span>{book.language}</span>
            <span>{book.genre}</span>
          </div>
        </div>

        {/* actions */}
        <div className={'text-right'}>
          <button
            className={'bg-gray-300 text-gray-800 px-3 py-1.5 rounded-md'}
            onClick={() => {
              ctype === 'add'
                ? handleAddBorrowingBook(book.code)
                : handleRemoveBorrowingBook(book.code);
            }}
          >
            {ctype === 'add' ? 'Add' : 'Remove'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
