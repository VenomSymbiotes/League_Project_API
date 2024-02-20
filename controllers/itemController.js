const Item = require("../models/item");

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);
    if (item) {
      return res.json(item);
    }
    return res.status(404).send("Item with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createItem = async (req, res) => {
  try {
    const item = await new Item(req.body);
    await item.save();
    return res.status(201).json({
      item,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateItem = async (req, res) => {
  try {
    let { id } = req.params;
    let item = await Item.findByIdAndUpdate(id, req.body, { new: true });
    if (item) {
      return res.status(200).json(item);
    }
    throw new Error("Item not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Item.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Item deleted");
    }
    throw new Error("Item not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
