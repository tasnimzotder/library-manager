import { useRouter } from "next/router";


const libraryURL = "http://localhost:8080/api/v1/library";
const userURL = "http://localhost:8080/api/v1/user";


type BookType = {
    code?: string,
    title: string,
    author: string,
    publisher: string,
    year: string | number,
    genre: string,
    language: string,
    cover: string,
}



const getBooks = async () => {
    let books: any;
    await fetch(`${libraryURL}/books`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error("Error getting books");
        }
    }).then(data => books = data).catch(err => {
        console.log({ err });
    }
    );

    return books;
}

const addBook = async (book: BookType) => {
    await fetch(`${libraryURL}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    }).then(response => {
        if (response.status === 200) {
            alert("Book added successfully");
            return response.json();
        } else {
            alert("Error adding book");
            throw new Error("Error adding book");
        }
    }).then((result) => {
        console.log({ result });
    }).catch(err => {
        console.log({ err });
    }
    );
}

const getMyBooks = async (username: string) => {
    let books: any;

    await fetch(`${userURL}/borrowed`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username
        })
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error("Error getting books");
        }
    }).then((result) => {
        books = result;
    }).catch((err) => {
        console.log({ err });
    });

    return books;
}

const addToMyBooks = async (username: string, book_code: number) => {
    await fetch(`${userURL}/borrow`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify([
            username,
            book_code
        ]
        )
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            alert("Error adding book");
            throw new Error("Error adding book");
        }
    }).catch(err => {
        console.log({ err });
    }
    );
}


const returnBook = async (username: string, book_code: number) => {
    await fetch(`${userURL}/return`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify([
            username,
            book_code
        ]
        )
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            alert("Error removing book");
            throw new Error("Error removing book");
        }
    }).catch(err => {
        console.log({ err });
    }
    );
}

export { getBooks, addBook, getMyBooks, addToMyBooks, returnBook };