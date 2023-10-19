const Author = require("./model");
const Book = require("../books/model");

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);

    res.status(201).json({ message: "success", author });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();

    res.status(200).json({ message: "success", authors });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const getAuthorAndBooks = async (req, res) => {
  try {
    const author = await Author.findOne({
      where: { authorName: req.params.authorName },
      include: Book,
    });

    res.status(200).json({ message: "success", author });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

module.exports = {
  addAuthor,
  getAllAuthors,
  getAuthorAndBooks,
};
