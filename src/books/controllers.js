const Book = require("./model");
const Author = require("../authors/model");

const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    console.log(book);

    res.status(201).json({ message: "success", book });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(412).json({ message: error.message, error });
      return;
    }
    res.status(500).json({ message: error.message, error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    if (books.length >= 1) {
      res.status(200).json({ message: "success", books });
      return;
    }

    res.status(404).json({ message: "failure" });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const updateBookGenric = async (req, res) => {
  try {
    const result = await Book.update(
      {
        author: req.body.newAuthor,
      },

      {
        where: { title: req.body.title },
      }
    );
    console.log(result);
    res.status(201).json({ message: "success", result });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const getBookAndAuthor = async (req, res) => {
  try {
    const book = await Book.findOne({
      where: { title: req.params.title },
    });

    const author = await book.getAuthor();

    res.status(200).json({ message: "success", book, author });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

module.exports = {
  addBook,
  getAllBooks,
  updateBookGenric,
  getBookAndAuthor,
};
