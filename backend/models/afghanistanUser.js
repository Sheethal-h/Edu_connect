const mongoose = require("mongoose");

const afghanistanUserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    department: {
      type: mongoose.Types.ObjectId,
      required: false,
      ref: "Department",
    },
    grade: { type: String, required: false },
    account_status: { type: String, required: true, default: "not-approved" },
    school: { type: String, required: false },
    transactionHash: { type: String, required: false }, // New field for transaction hash
    consentFilePath: { type: String, required: false }, // New field for consent file path
    age: { type: Number, required: false }, // New field for age
    gender: { type: String, required: false }, // New field for gender
  },
  { collection: "AfghanistanUsers" }
);

const AfghanistanUser = mongoose.model(
  "AfghanistanUser",
  afghanistanUserSchema
);
module.exports = AfghanistanUser;
