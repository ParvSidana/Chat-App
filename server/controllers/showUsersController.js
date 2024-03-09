import User from "../models/userModel.js";

const getAllUsers = async (req, res) => {
  try {
    const loggedId = req.user._id;

    // GET ALL USERS EXCEPT LOGGED ONE
    const allUsers = await User.find({ _id: { $ne: loggedId } }).select(
      "-password"
    );

    res.status(200).json(allUsers);
  } catch (error) {
    console.log("Error in showUsersContoller", error.message);
    res.status(500).json({ err: "Internal server Error" });
  }
};

export default getAllUsers;
