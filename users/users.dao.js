const { v4: uuidv4 } = require("uuid");
const Users = require("./users.entity");

const saveUser = async (userReq, done) => {
  try {
    const user = new Users(userReq);
    await user.save((err, savedUser) => {
      if (err) {
        return done("Error saving user details");
      }
      return done(null, savedUser);
    });
  } catch (error) {
    return done("Error saving user details");
  }
};

const findUsers = async (done) => {
  try {
    const users = await Users.find({});
    return done(null, users);
  } catch (error) {
    return done("Error getting users details");
  }
};

const getUserByEmail = async (email, done) => {
  try {
    const user = await Users.findOne({ email: email });
    return done(null, user);
  } catch (error) {
    return done("Error fetching details of user by email");
  }
};

const getUserById = async (userId, done) => {
  try {
    const user = await Users.findOne({ userId: userId });
    return done(null, user);
  } catch (error) {
    return done("Error fetching details of user by user id");
  }
};

const updateUserDetails = async (userId, updateReq, done) => {
  try {
    const user = await Users.findOneAndUpdate(
      { userId: userId },
      { $set: updateReq },
      { new: true },
      (err, updatedUser) => {
        if (err) {
          return done("Error updating details of specified user");
        }
        return done(null, updatedUser);
      }
    );
  } catch (error) {
    return done("Error updating details of specified user");
  }
};

module.exports = {
  saveUser,
  findUsers,
  getUserByEmail,
  updateUserDetails,
  getUserById,
};
