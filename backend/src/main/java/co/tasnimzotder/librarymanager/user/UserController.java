package co.tasnimzotder.librarymanager.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/user")
public class UserController {
    private final UserService userService;
    private final String cors_origins = "http://localhost:3000";

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin(origins = cors_origins)
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getUsers();
    }

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
}
