package co.tasnimzotder.librarymanager.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

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

        return "User added successfully";
    }

    public String updateUserPassword(String username, int dob, String password) {
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getUsername().equals(username) && users.get(i).getDob() == dob) {
                users.get(i).setPassword(password);
                return "User password updated successfully";
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
}
