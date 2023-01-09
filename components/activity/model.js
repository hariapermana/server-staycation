const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
    default: false,
  },
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
