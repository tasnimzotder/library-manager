package co.tasnimzotder.librarymanager.library;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class LibraryService {

    private List<Book> books = new ArrayList<>();
    private int count = 8;

    public LibraryService() {
        new BooksList().getBooksList().forEach(book -> books.add(book));
    }

    public List<Book> getBooks() {
        return books;
    }

    public String addBook(Book book) {
        book.setCode(count + 1);
        count++;
        this.books.add(book);
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
