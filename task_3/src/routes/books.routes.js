const { Router } = require("express");
const router = Router();
const booksController = require("../controller/books.controller");
const booksMiddleware = require("../middleware/books.middleware");

router.get("/", booksController.getAllBooks);

router.get("/:id", booksController.getBookById);

router.post("/", booksMiddleware.verifyBook, booksController.creatNewBook);

router.put("/:id", booksController.updateBook);

router.delete("/:id", booksController.deleteBook);

module.exports = router;
