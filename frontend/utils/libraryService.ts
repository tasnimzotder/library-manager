const libraryURL = "http://localhost:8080/api/v1/library";

const getBooks = async () => {
    let books: any;
    await fetch(`${libraryURL}/books`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json()).then(data => books = data).catch(err => {
        console.log({ err });
    }
    );

    return books;
}



export { getBooks };