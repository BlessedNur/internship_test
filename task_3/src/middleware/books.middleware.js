const verifyBook = (req, res, next) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ message: "Please provide all fields" });
  }
  next();
};

module.exports = { verifyBook };
