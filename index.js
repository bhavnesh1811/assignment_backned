const express = require("express");
require("dotenv").config();
const { connection } = require("./Configs/db");
const { UserRouter } = require("./Route/User.Route.js");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

server.get("/", (req, res) => {
  
  res.status(200).send({message:"Api is Working fine"});
});

server.use("/users", UserRouter);

server.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (error) {
    console.log("Not Connected to Database");
  }
  console.log(`Server is running on port ${process.env.PORT}`);
});
