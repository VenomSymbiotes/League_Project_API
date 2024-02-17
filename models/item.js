const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Item = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    ad: { type: Number, required: false },
    ap: { type: Number, required: false },
    critChance: { type: Number, required: false },
    critStrikeDamage: { type: Number, required: false },
    magicPenetration: { type: Number, required: false },
    armorPenetration: { type: Number, required: false },
    lethality: { type: Number, required: false },
    lifestealAndVamp: { type: Number, required: false },
    magicResist: { type: Number, required: false },
    armor: { type: Number, required: false },
    attackSpeed: { type: Number, required: false },
    health: { type: Number, required: false },
    healthRegen: { type: Number, required: false },
    mana: { type: Number, required: false },
    manaRegen: { type: Number, required: false },
    moveSpeed: { type: Number, required: false },
    abilityHaste: { type: Number, required: false },
    tenacity: { type: Number, required: false },
    healAndShieldPower: { type: Number, required: false },
    goldGeneration: { type: String, required: false },
    itemAbility: { type: Number, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("items", Item);
