package co.tasnimzotder.librarymanager.user;

import java.util.ArrayList;
import java.util.List;

public class User {
    private String username;
    private String password;
    private String email;
    private int dob;

    public List<Integer> borrowed_books = new ArrayList<>();

    public User(String username, String password, String email, int dob) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.dob = dob;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getDob() {
        return dob;
    }

    public void setDob(int dob) {
        this.dob = dob;
    }

    public List<Integer> getBorrowed_books() {
        return borrowed_books;
    }

    public void setBorrowed_books(List<Integer> borrowed_books) {
        this.borrowed_books = borrowed_books;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", dob=" + dob +
                ", borrowed_books=" + borrowed_books +
                '}';
    }
}
