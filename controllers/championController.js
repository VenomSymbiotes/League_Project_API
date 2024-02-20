const Champion = require("../models/champion");

const getAllChampions = async (req, res) => {
  try {
    const champions = await Champion.find();
    res.json(champions);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getChampionById = async (req, res) => {
  try {
    const { id } = req.params;
    const champion = await Champion.findById(id);
    if (champion) {
      return res.json(champion);
    }
    return res
      .status(404)
      .send("Champion with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createChampion = async (req, res) => {
  try {
    const champion = await new Champion(req.body);
    await champion.save();
    return res.status(201).json({
      champion,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateChampion = async (req, res) => {
  try {
    let { id } = req.params;
    let champion = await Champion.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (champion) {
      return res.status(200).json(champion);
    }
    throw new Error("Champion not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteChampion = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Champion.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Champion deleted");
    }
    throw new Error("Champion not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllChampions,
  getChampionById,
  createChampion,
  updateChampion,
  deleteChampion,
};
