const express = require('express');
const router = express.Router();
// const userController= require("../controllers/userController")
const jwt = require("../controllers/Jwt")
const mdl = require("../middleware/auth.js")

// ============================================================

router.post("/users", jwt.createUser)

// ========================================================

router.post("/login", jwt.loginUser)

// ========================================================

router.get("/users/:userId",mdl.authentication,mdl.authorization, jwt.getUserData)

// ================================================================

router.put("/users/:userId",mdl.authentication,mdl.authorization, jwt.updateUser)

// ==================================================================

router.delete('/users/:userId',mdl.authentication,mdl.authorization, jwt.deleteUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)
// router.post("/users/:userId/posts", userController.postMessage)

// router.put("/users/:userId", userController.updateUser)
// // router.delete('/users/:userId', userController.deleteUser)

module.exports = router;