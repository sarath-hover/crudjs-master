const express = require("express");
const { addListener } = require("../models/CrudDB");
const router = express.Router();
const CrudDB1 = require("../models/CrudDB");

//GET Reading the total data from the database 
router.get("/", async (req, res) => {
  try {
    const DBdata = await CrudDB1.find();
    res.json(DBdata);
  } catch (err) {
    console.log("Error" + err);
  }
});
//=============================================================================================

//GET Reading the Single data from the data base
router.get("/:id", async (req, res) => {
  try {
    const DBdata = await C.findById(req.params.id);
    res.json(DBdata);
  } catch (err) {
    console.log("Error" + err);
  }
});
//================================================================================================

//POST Inputting/ posting the data to the database
router.post("/", async (req, res) => {
  const DBdata = new CrudDB1({
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    maidenName: req.body.maidenName,
    age: req.body.age,
    gender: req.body.gender,
    email: req.body.email,
    phone: req.body.phone,
    username: req.body.username,
    password: req.body.password,
    birthDate: req.body.birthDate,
    image: req.body.image,
    bloodGroup: req.body.bloodGroup,
    height: req.body.height,
    weight: req.body.weight,
  });
  try {
    const Data1 = await DBdata.save();
    res.json(Data1);
    console.log("Sucessfully updated ");
  } catch (err) {
    console.log("Error" + err);
  }
});
//===============================================================================================

//Put the data
router.put("/:id", async (req, res) => {
  try {
    let post = await CrudDB1.findById(req.params.id);

    if (!post) return res.status(404).json({ msg: "User not found" });

    // Update the user name and age
    post.firstName= req.body.firstName,
    post.lastName= req.body.lastName,
    post.maidenName= req.body.maidenName,
    post.age= req.body.age,
    post.gender= req.body.gender,
    post.email= req.body.email,
    post.phone= req.body.phone,
    post.username= req.body.username,
    post.password= req.body.password,
    post.birthDate= req.body.birthDate,
    post.image= req.body.image,
    post.bloodGroup= req.body.bloodGroup,
    post.height= req.body.height,
    post.weight= req.body.weight 
    await post.save();

    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//===============================================================================================

// patch/ update request
router.patch("/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["firstName", "lastName", "maidenName", "age", "gender", "email", "phone", "username", "password", "birthDate", "image", "bloodGroup", "height", "weight"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    let user = await CrudDB1.findById(req.params.id);

    if (!user) return res.status(404).json({ msg: "User not found" });

    updates.forEach((update) => (user[update] = req.body[update]));

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//===============================================================================================

// Deleting the single Data
router.delete("/:id", async (req, res) => {
  try {
    const DBdata = await CrudDB1.findById(req.params.id);
    const Data1 = await DBdata.remove();
    res.json(Data1);
  } catch (err) {
    console.log("Error" + err);
  }
});
//===============================================================================================

module.exports = router;
