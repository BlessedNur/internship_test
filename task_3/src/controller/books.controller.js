const Book = require("../models/Book");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const foundBook = req.params.id;
    const book = await Book.findById(foundBook);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const creatNewBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const existingBook = await Book.findOne({ title });
    if (existingBook) {
      return res.status(400).json({ mhsowessage: "Book already exists" });
    }

    const newBook = new Book({ title, author, year });
    const savedBook = await newBook.save();
    res
      .status(201)
      .json({ message: "Book created succesfully", book: savedBook });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const bookId = req.params.id;
    const foundBook = await Book.findByIdAndUpdate(
      bookId,
      { title, author, year },
      { new: true }
    );
    if (!foundBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book updated succesfully", foundBook });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const deleteBook = async (req, res) => {
  try {
    const foundBookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(foundBookId);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully", book: deletedBook });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  creatNewBook,
  updateBook,
  deleteBook,
};
