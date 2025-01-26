const Item = require('../models/Item');

// Get all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new item
const addItem = async (req, res) => {
  const { name, category, quantity } = req.body;
  try {
    const newItem = new Item({ name, category, quantity });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an item
const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, category, quantity } = req.body;
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      id,
      { name, category, quantity },
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an item
const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    await Item.findByIdAndDelete(id);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getItems, addItem, updateItem, deleteItem };
