const express = require ("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  getAuthenticatedUser
} = require("../controllers/user.js");
const { verifyAdmin, verifyToken, verifyUser } = require("../utils/verifyToken.js");

const router = express.Router();

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

router.get("/auth/user", verifyToken, getAuthenticatedUser);


//GET ALL
router.get("/", verifyAdmin, getUsers);

module.exports = router;
