const Todo = require("../model/todo");

const getAllTask = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ todos });
  } catch (error) {
    console.log(error);
  }
};

const addNewTask = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    console.log(error);
  }
};

const getSingleTask = async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });
    res.status(200).json({ todo });
  } catch (error) {
    console.log(error);
  }
};

const editTask = async (req, res) => {
  try {
    const editedTodo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({ editedTodo });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const deletedTodo = await Todo.findOneAndDelete({ _id: req.body.id });
    res.status(201).json({ deletedTodo });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTask,
  addNewTask,
  getSingleTask,
  editTask,
  deleteTask,
};
