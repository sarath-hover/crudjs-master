const mongoose = require("mongoose");

// defining the Database Structure

const CrudDBSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  maidenName: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  birthDate: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  bloodGroup: {
    type: String,
    require: true,
  },
  height: {
    type: Number,
    require: true,
  },
  weight: {
    type: Number,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
});
// kljlkhju
module.exports = mongoose.model("CrudDB", CrudDBSchema);
