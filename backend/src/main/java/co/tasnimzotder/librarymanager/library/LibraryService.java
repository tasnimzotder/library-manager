package co.tasnimzotder.librarymanager.library;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class LibraryService {

    private List<Book> books = new BooksList().getBooksList();
    private int count = 8;

    public List<Book> getBooks() {
        return books;
    }

    public String addBook(Book book) {
        // book.setCode(count + 1);
        // count++;
        this.books.add(new Book());
        // this.books.add(new Book(1,
        // "The Alchemist",
        // "Paulo Coelho",
        // "HarperCollins",
        // 1988,
        // "Fiction",
        // "English",
        // "https://m.media-amazon.com/images/I/517pfctTa9L._SL500_.jpg"));

        // add the book to the list of books
        // books.add(book);

        return "Book added successfully";
    }

    public void removeBook(Book book) {
        books.remove(book);
    }

    public void removeBookByCode(int code) {
        books.removeIf(book -> book.getCode() == code);
    }

    public Book getBookByCode(int code) {
        return books.stream().filter(book -> book.getCode() == code).findFirst().get();
    }
}
