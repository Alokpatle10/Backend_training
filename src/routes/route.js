const express = require("express");
const router = express.Router();
const BookController = require("../controllers/userController");

// ===========================================================
router.post("/createBook", BookController.createBook);


// ============================================================

router.get("/bookList", BookController.bookList)

// =======================================================---==

router.get("/getBooksInYear", BookController.getBooksInYear)

// ==============================================================

router.post("/getParticularBooks", BookController.getParticularBooks);

// ===================================================================

router.get("/getXINRBooks", BookController.getXINRBooks);

// =========================================================================

router.get("/getRandomBooks", BookController.getRandomBooks);


// router.get("/getparticularBooks", UserController.getparticularBooks)

module.exports = router;