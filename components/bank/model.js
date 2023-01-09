const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
  bankName: {
    type: String,
    required: true,
    unique: true,
  },
  accountNumber: {
    type: String,
    required: true,
    unique: true,
  },
  accountName: {
    type: String,
    required: true,
  },
});

const Bank = mongoose.model("Bank", bankSchema);

module.exports = Bank;
