const Region = require("../models/region");

const getAllRegions = async (req, res) => {
  try {
    const regions = await Region.find();
    res.json(regions);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getRegionById = async (req, res) => {
  try {
    const { id } = req.params;
    const region = await Region.findById(id);
    if (region) {
      return res.json(region);
    }
    return res.status(404).send("Region with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createRegion = async (req, res) => {
  try {
    const region = await new Region(req.body);
    await region.save();
    return res.status(201).json({
      region,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateRegion = async (req, res) => {
  try {
    let { id } = req.params;
    let region = await Region.findByIdAndUpdate(id, req.body, { new: true });
    if (region) {
      return res.status(200).json(region);
    }
    throw new Error("Region not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteRegion = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Region.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Region deleted");
    }
    throw new Error("Region not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllRegions,
  getRegionById,
  createRegion,
  updateRegion,
  deleteRegion,
};
