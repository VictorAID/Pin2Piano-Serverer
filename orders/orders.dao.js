const { v4: uuidv4 } = require("uuid");
const Orders = require("./orders.entity");

const saveOrder = async (orderReq, done) => {
  try {
    const order = new Orders(orderReq);
    await order.save((err, savedOrder) => {
      if (err) {
        return done("Error saving order");
      }
      return done(null, savedOrder);
    });
  } catch (error) {
    return done("Error saving order");
  }
};

const findOrdersPlacedByUser = async (userId, done) => {
  try {
    const orders = await Orders.find({ UserId: userId });
    return done(null, orders);
  } catch (error) {
    return done("Error fetching orders placed by user");
  }
};

module.exports = {
  saveOrder,
  findOrdersPlacedByUser,
};
