const BookApi = {
  getAllBooks: async () => {
    const res = await fetch("http://localhost:8080/v1/book", { method: "GET" });
    const data = await res.json();
    console.log(data);
    return data;
  },
  getBookByIsbn: async (bookIsbn) => {
    const res = await fetch(`http://localhost:8080/v1/book/${bookIsbn}`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  },
  addBook: async (data) => {
    const res = await fetch("http://localhost:8080/v1/book", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  },
  patchBookByIsbn: async (bookIsbn, data) => {
    const res = await fetch(`http://localhost:8080/v1/book/${bookIsbn}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  },
  deleteBook: async (bookIsbn) => {
    const res = await fetch(`http://localhost:8080/v1/book/${bookIsbn}`, {
      method: "DELETE",
    });
    return res.json();
  },
};

module.exports = { BookApi };