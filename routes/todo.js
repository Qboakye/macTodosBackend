const express = require("express");
const router = express.Router();

const {
  getAllTask,
  addNewTask,
  getSingleTask,
  editTask,
  deleteTask,
} = require("../controllers/todo");

router.get("/", getAllTask);
router.post("/", addNewTask);
router.get("/:id", getSingleTask);
router.patch("/:id", editTask);
router.delete("/:id", deleteTask);

module.exports = router;
