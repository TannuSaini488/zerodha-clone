const { OrdersModel } = require("../model/OrdersModel");
const { UserModel } = require("../model/UserModel");

module.exports.create = async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    let savedOrder = await newOrder.save();
    console.log("ORDER CREATED:", savedOrder);

    await UserModel.updateOne(
      { email: req.user.email },
      { $push: { orders: savedOrder._id } }
    );

    res.json({ status: "Done" });
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ error: "Order creation failed", message: err.message });
  }
};

module.exports.index = async (req, res) => {
  let user = await UserModel.findOne({ email: req.user.email }).populate("orders");
  res.json(user.orders);
};
