const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Champion = new Schema(
  {
    name: { type: String, required: true },
    champTitle: { type: String, required: true },
    passive: { type: String, required: true },
    ability1: { type: String, required: true },
    ability2: { type: String, required: true },
    ability3: { type: String, required: true },
    ultimateAbilty: { type: String, required: true },
    lore: { type: String, required: true },
    usualRole: { type: String, required: true },
    regionId: { type: Schema.Types.ObjectId, required: true },
    skinList: { type: [Array], required: true },
    musicTheme: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("champions", Champion);
