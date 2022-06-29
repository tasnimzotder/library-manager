package co.tasnimzotder.librarymanager.library;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/library")
public class LibraryController {

    private final LibraryService libraryService;
    private final String cors_origins = "http://localhost:3000";

    @Autowired
    public LibraryController(LibraryService libraryService) {
        this.libraryService = libraryService;
    }

    @CrossOrigin(origins = cors_origins)
    @GetMapping("books")
    public List<Book> getBooks() {
        return libraryService.getBooks();
    }

    @CrossOrigin(origins = cors_origins)
    @PostMapping("add")
    public String addBook(@RequestBody Book book) {
        return libraryService.addBook(book);
    }

    @CrossOrigin(origins = cors_origins)
    @DeleteMapping("remove")
    public void removeBook(@RequestBody int code) {
        libraryService.removeBookByCode(code);
    }
}
