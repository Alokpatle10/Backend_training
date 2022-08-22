const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")
router.get("/hola",bookController.getbooks)

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })
router.post("/pub", publisherController.createpub  )
router.post("/Author", authorController.createAuthor  )

router.post("/getAuthorsData", authorController.getAuthorsData)

router.post("/book", bookController.createBook  )

router.post("/pub", publisherController.createpub)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;