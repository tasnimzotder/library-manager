package co.tasnimzotder.librarymanager.library;

import java.util.List;

public class BooksList {
        public List<Book> booksList = List.of(
                        new Book(
                                        1,
                                        "The Alchemist",
                                        "Paulo Coelho",
                                        "HarperCollins",
                                        1988,
                                        "Fiction",
                                        "English",
                                        "https://m.media-amazon.com/images/I/517pfctTa9L._SL500_.jpg"),

                        new Book(
                                        2,
                                        "Diary of a Young Girl",
                                        "Anna Frank",
                                        "",
                                        0,
                                        "History",
                                        "English",
                                        "https://m.media-amazon.com/images/I/51Q7SCueSFL._SL500_.jpg"),
                        new Book(3,
                                        "How to Avo a Climate Disaster",
                                        "Bill Gates",
                                        "Random House",
                                        2021,
                                        "Non-Fiction",
                                        "English",
                                        "https://m.media-amazon.com/images/I/51UAHGbzNhL._SL500_.jpg"),

                        new Book(
                                        4,
                                        "The Hobbit",
                                        "J.R.R. Tolkien",
                                        "Allen & Unwin",
                                        1954,
                                        "Fiction",
                                        "English",
                                        "https://m.media-amazon.com/images/I/51KakdZ60wL._SL500_.jpg"),
                        new Book(5,
                                        "13 Reasons Why",
                                        "Jay Asherson",
                                        "Random House",
                                        2017,
                                        "Fiction",
                                        "English",
                                        "https://m.media-amazon.com/images/I/51rhvQtBq7L._SL250_FMwebp_.jpg"),
                        new Book(
                                        6,
                                        "The Fault in Our Stars",
                                        "John Green",
                                        "Random House",
                                        2017,
                                        "Fiction",
                                        "English",
                                        "https://m.media-amazon.com/images/I/41x0pn4T3fL._SL500_.jpg"),
                        new Book(
                                        7,
                                        "Can\'t Hurt Me", "Dav Goggins", "Random House", 2021,
                                        "Autobiography",
                                        "English",
                                        "https://m.media-amazon.com/images/I/51N2hDuVMrL._SL500_.jpg"),
                        new Book(
                                        8,
                                        "Numbers Don\'t Lie",
                                        "Vaclav Smil", "Random House", 2021,
                                        "Non-Fiction",
                                        "English",
                                        "https://m.media-amazon.com/images/I/51Yt5tRbk5L._SL500_.jpg"));

        public List<Book> getBooksList() {
                return booksList;
        }
}
