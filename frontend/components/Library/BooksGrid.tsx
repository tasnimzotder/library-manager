import Image from 'next/image';

type BookType = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  year: string;
  language: string;
  cover: string;
  category?: string;
};

const BookCard = ({ book }: { book: BookType }) => {
  const cover_size = 256;

  return (
    <div className={`bg-gray-200 rounded-md max-w-[${256}px]`}>
      <div className={''}>
        <Image
          src={book.cover}
          height={cover_size}
          width={cover_size}
          objectFit="cover"
          className={'rounded-t-md'}
        />
      </div>
      <div className={'px-6 py-2'}>
        <div className={'text-lg font-medium py-2'}>
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
          <span>{book.category}</span>
        </div>

        {/* actions */}
        <div className={'text-right'}>
          <button
            className={'bg-gray-300 text-gray-800 px-3 py-1.5 rounded-md'}
            onClick={() => {}}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

const BooksGrid = ({ books }: { books: BookType[] }) => {
  return (
    <div className={'flex flex-row flex-wrap gap-6 justify-center'}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksGrid;
