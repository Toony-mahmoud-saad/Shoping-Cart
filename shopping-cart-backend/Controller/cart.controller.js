const CartSchema = require("../Models/cart.model")

exports.addCart = async (req, res) => {
  const newItem = new CartSchema(req.body);
  await newItem.save();
  res.json(newItem);
}

exports.getCart = async (req, res) => {
  const items = await CartSchema.find();
  res.json(items);
}

exports.updateCart = async (req, res) => {
  const updatedItem = await CartSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
}

exports.deleteCart = async (req, res) => {
  await CartSchema.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed" });
}



