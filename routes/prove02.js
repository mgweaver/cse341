const express = require('express')
const router = express.Router()

let books = []

router.get('/', (req, res, next) => {
  res.render('pages/prove02', {
    title: 'Prove02',
    path: '/prove02'
  })
});

router.post('/add-book', (req, res, next) => {
  books.push({
    title: req.body.title,
    summary: req.body.summary
  })
  res.render('pages/prove02list', {
    title: 'Prove02 List',
    path: '/prove02',
    books: books,
  })
});

module.exports = router;