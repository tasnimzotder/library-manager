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


const books: BookType[] = [
    {
        code: 1,
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        publisher: 'HarperCollins',
        year: '1988',
        language: 'English',
        genre: 'Fiction',
        cover: 'https://m.media-amazon.com/images/I/517pfctTa9L._SL500_.jpg',
    },
    {
        code: 2,
        title: 'Diary of a Young Girl',
        author: 'Anna Frank',
        publisher: '',
        year: '',
        language: 'English',
        genre: 'History',
        cover: 'https://m.media-amazon.com/images/I/51Q7SCueSFL._SL500_.jpg',
    },
    {
        code: 3,
        title: 'How to Avoid a Climate Disaster',
        author: 'Bill Gates',
        publisher: 'Random House',
        year: '2021',
        language: 'English',
        genre: 'Non-Fiction',
        cover: 'https://m.media-amazon.com/images/I/51UAHGbzNhL._SL500_.jpg',
    },
    {
        code: 4,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        publisher: 'Allen & Unwin',
        year: '1954',
        language: 'English',
        genre: 'Fiction',
        cover: 'https://m.media-amazon.com/images/I/51KakdZ60wL._SL500_.jpg',
    },
    {
        code: 5,
        title: '13 Reasons Why',
        author: 'Jay Asherson',
        publisher: 'Random House',
        year: '2017',
        language: 'English',
        genre: 'Fiction',
        cover: 'https://m.media-amazon.com/images/I/51rhvQtBq7L._SL250_FMwebp_.jpg',
    },
    {
        code: 6,
        title: 'The Fault in Our Stars',
        author: 'John Green',
        publisher: 'Random House',
        year: '2017',
        language: 'English',
        genre: 'Fiction',
        cover: 'https://m.media-amazon.com/images/I/41x0pn4T3fL._SL500_.jpg',
    },

    {
        code: 7,
        title: "Can't Hurt Me",
        author: 'David Goggins',
        publisher: 'Random House',
        year: '2021',
        language: 'English',
        genre: 'Autobiography',
        cover: 'https://m.media-amazon.com/images/I/51N2hDuVMrL._SL500_.jpg',
    },
    {
        code: 8,
        title: "Numbers Don't Lie",
        author: 'Vaclav Smil',
        publisher: 'Random House',
        year: '2021',
        language: 'English',
        genre: 'Non-Fiction',
        cover: 'https://m.media-amazon.com/images/I/51Yt5tRbk5L._SL500_.jpg',
    },
];

export { books };