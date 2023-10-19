const { Router } = require("express");
const authorRouter = Router();

const {
  addAuthor,
  getAllAuthors,
  getAuthorAndBooks,
} = require("./controllers");

authorRouter.post("/", addAuthor);

authorRouter.get("/", getAllAuthors);

authorRouter.get("/:authorName", getAuthorAndBooks);

module.exports = authorRouter;
