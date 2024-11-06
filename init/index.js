const initData = require("./data.js");
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/wanderlust")
  .then(() => {
    console.log("Connected!");
  })
  .catch((err) => {
    // console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "67064fa20fdc5dc7646edffc",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initalized");
};

initDB();
