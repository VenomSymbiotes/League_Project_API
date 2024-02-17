const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Region = new Schema(
  {
    name: { type: String, required: true },
    championsInRegion: { type: [Array], required: true },
    momument: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("regions", Region);
