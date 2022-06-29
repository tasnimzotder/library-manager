package co.tasnimzotder.librarymanager.user;

public class User {
    private int id;
    private String username;
    private String password;
    private String email;
    private int dob;

    public User() {
    }

    public User(int id, String username, String password, String email, int dob) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.dob = dob;
    }

    public User(String username, String password, String email, int dob) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.dob = dob;
    }
}
