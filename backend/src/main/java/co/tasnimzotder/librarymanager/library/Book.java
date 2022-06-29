package co.tasnimzotder.librarymanager.library;

public class Book {
    int code;
    String title;
    String author;
    String publisher;
    int year;
    String genre;
    String language;
    String cover;

    // public Book(int code, String title, String author, String publisher, int
    // year, String genre, String language,
    // String cover) {
    // this.code = code;
    // this.title = title;
    // this.author = author;
    // this.publisher = publisher;
    // this.year = year;
    // this.genre = genre;
    // this.language = language;
    // this.cover = cover;
    // }

    public Book() {
    };

    public Book(int code, String title, String author, String publisher, int year, String genre, String language,
            String cover) {
        this.code = code;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.year = year;
        this.genre = genre;
        this.language = language;
        this.cover = cover;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    @Override
    public String toString() {
        return "Book{" +
                "code=" + code +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", publisher='" + publisher + '\'' +
                ", year=" + year +
                ", genre='" + genre + '\'' +
                ", language='" + language + '\'' +
                ", cover='" + cover + '\'' +
                '}';
    }
}
