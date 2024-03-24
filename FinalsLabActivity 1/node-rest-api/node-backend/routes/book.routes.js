const express = require('express');
const bookRoute = express.Router();
const Book = require('../model/Book');

// Add Book
bookRoute.route('/add-book').post((req, res, next) => {
    Book.create(req.body)
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            return next(error);
        });
});

// Get all Books
bookRoute.route('/').get((req, res, next) => {
    Book.find()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            return next(error);
        });
});

// Get a Book by ID
bookRoute.route('/read-book/:id').get((req, res, next) => {
    Book.findById(req.params.id)
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            return next(error);
        });
});

// Update a Book by ID
bookRoute.route('/update-book/:id').put((req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, { $set: req.body })
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            return next(error);
        });
});

// Delete a Book by ID
// Delete a Book by ID
bookRoute.route('/delete-book/:id').delete((req, res, next) => {
  Book.findOneAndDelete({ _id: req.params.id })
      .then(data => {
          if (!data) {
              return res.status(404).json({ message: "Book not found" });
          }
          res.status(200).json({ message: "Book deleted successfully", data });
      })
      .catch(error => {
          return next(error);
      });
});


module.exports = bookRoute;
