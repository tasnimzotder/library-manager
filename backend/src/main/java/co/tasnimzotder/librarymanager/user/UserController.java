package co.tasnimzotder.librarymanager.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.tasnimzotder.librarymanager.library.Book;

@RestController
@RequestMapping("api/v1/user")
public class UserController {
    private final UserService userService;
    private final String cors_origins = "http://localhost:3000";

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // @CrossOrigin(origins = cors_origins)
    // @GetMapping("/all")
    // public List<User> getAllUsers() {
    // return userService.getUsers();
    // }

    @CrossOrigin(origins = cors_origins)
    @PostMapping("/login")
    public String handleLogin(@RequestBody User user) {
        return userService.handleLogin(user.getUsername(), user.getPassword());
    }

    @CrossOrigin(origins = cors_origins)
    @PostMapping("/register")
    public String addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @CrossOrigin(origins = cors_origins)
    @PostMapping("/update")
    public String updateUserPassword(@RequestBody User user) {
        return userService.updateUserPassword(user.getUsername(), user.getDob(), user.getPassword());
    }

    @CrossOrigin(origins = cors_origins)
    @PostMapping("/borrowed")
    public List<Book> getBorrowedBooks(@RequestBody User user) {
        return userService.getBorrowedBooks(user);
    }

    @CrossOrigin(origins = cors_origins)
    @PostMapping("/borrow")
    public String borrowBook(@RequestBody List<String> req) {
        return userService.addBorrowedBooks(req.get(0), Integer.parseInt(req.get(1)));
    }

    @CrossOrigin(origins = cors_origins)
    @PostMapping("/return")
    public String returnBook(@RequestBody List<String> req) {
        return userService.returnBorrowedBooks(req.get(0), Integer.parseInt(req.get(1)));
    }
}
