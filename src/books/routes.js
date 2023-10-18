const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks, updateBookGenric } = require("./controllers");

// http://localhost:5001/books/books

bookRouter.post("/", addBook);

bookRouter.get("/", getAllBooks);

bookRouter.put("/", updateBookGenric);

module.exports = bookRouter;
