const express = require("express");
const mongoose = require("mongoose");
const Url = "mongodb://127.0.0.1:27017/CrudPro";
const cors = require("cors");
const app = express();

mongoose.connect(Url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected... Hello MongoDB");
});

app.use(express.json());

app.use(
  cors({
    methods: "*",
  })
);

const CrudRouter = require("./Routers/Crud");
app.use("/Crud", CrudRouter);

app.listen(9000, () => {
  console.log("Server Started ...");
});
