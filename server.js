const PORT = process.env.PORT || 8080;
const express = require("express");
const cors = require("cors");
const app = express();

// DotEnv
require("dotenv").config();

// DB
const connect = require("./db/connect");
const connectDB = process.env.MONGO_DB_URI;

// Routes
const todoRoutes = require("./routes/todo");

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/todo", todoRoutes);

app.get("/", (req, res) => {
  res.send("Welcome HEllo world");
});

const connectFun = async (url) => {
  try {
    let count = 3;
    await connect(url);
    const int = setInterval(() => {
      console.log(count);
      count--;
      if (count === 0) {
        clearInterval(int);
        app.listen(PORT, () => console.log(`Running on ${PORT}....`));
      }
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};

connectFun(connectDB);
