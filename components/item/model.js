const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: true,
  },
  imageId: [
    {
      type: objectId,
      ref: "Image",
    },
  ],
  featureId: [
    {
      type: objectId,
      ref: "Feature",
    },
  ],
  activityId: [
    {
      type: objectId,
      ref: "Activity",
    },
  ],
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
