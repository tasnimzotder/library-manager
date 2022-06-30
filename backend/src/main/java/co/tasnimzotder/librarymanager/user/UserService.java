package co.tasnimzotder.librarymanager.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import co.tasnimzotder.librarymanager.library.Book;
import co.tasnimzotder.librarymanager.library.LibraryService;

@Component
public class UserService {
    private List<User> users = new ArrayList<>();

    public UserService() {
        users.add(new User("admin", "password", "admin", 2000));
    }

    public List<User> getUsers() {
        return users;
    }

    public String addUser(User user) {
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getUsername().equals(user.getUsername())) {
                throw new IllegalArgumentException("User already exists");
            }
        }

        users.add(user);

        return user.getUsername();
    }

    public String updateUserPassword(String username, int dob, String password) {
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getUsername().equals(username) && users.get(i).getDob() == dob) {
                users.get(i).setPassword(password);
                return username;
            }
        }

        throw new IllegalArgumentException("User does not exist");
    }

    public String handleLogin(String username, String password) {

        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getUsername().equals(username) && users.get(i).getPassword().equals(password)) {
                return username;
            }
        }

        throw new IllegalArgumentException("Login failed");
    }

    public String addBorrowedBooks(String username, int bookId) {
        // String username = user.getUsername();

        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getUsername().equals(username)) {

                if (users.get(i).getBorrowed_books().contains(bookId)) {
                    throw new IllegalArgumentException("Book already borrowed");
                }

                users.get(i).borrowed_books.add(bookId);
                return username;
            }
        }

        throw new IllegalArgumentException("User does not exist");
    }

    public String returnBorrowedBooks(String username, int bookId) {
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getUsername().equals(username)) {
                for (int j = 0; j < users.get(i).borrowed_books.size(); j++) {
                    if (users.get(i).borrowed_books.get(j) == bookId) {
                        users.get(i).borrowed_books.remove(j);
                    }
                }
                return username;
            }
        }

        throw new IllegalArgumentException("User does not exist");
    }

    public List<Book> getBorrowedBooks(User user) {
        List<Book> books = new ArrayList<Book>();
        String username = user.getUsername();

        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getUsername().equals(username)) {
                List<Integer> books_list = users.get(i).borrowed_books;

                if (books_list.size() == 0) {
                    return books;
                }

                for (int j = 0; j < books_list.size(); j++) {
                    books.add(new LibraryService().getBookByCode(books_list.get(j)));
                }

                return books;
            }
        }

        throw new IllegalArgumentException("User does not exist");
    }
}
