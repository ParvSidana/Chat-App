import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/jwtToken.js";

const login = async (req, res) => {
  // res.send("Login route");
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    const checkPassword = await bcrypt.compare(password, user?.password || "");

    if (!user || !checkPassword) {
      return res.status(400).json({ err: "Invalid username or password" });
    }

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in Login ", error.message);
    res.status(500).json({ err: "Internal server error" });
  }
};

const logout = async (req, res) => {
  // res.send("logout route");
  try {
    //COOKIE EXPIRE
    res.cookie("jwt", "", { maxAge: 0 });

    res.status(200).json({ mess: "Logged out Successfully" });
  } catch (error) {
    console.log("Error in Logout ", error.message);
    res.status(500).json({ err: "Internal server error" });
  }
};

const signup = async (req, res) => {
  // res.send("signup route");
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ err: "Password didn't match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ err: "Username already exists" });
    }

    //HASHING PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //ADD A PROFILE PIC

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // GENERATE JWT TOKEN
      generateToken(newUser._id, res);

      // SAVE USER TO DB
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ err: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in Signup ", error.message);
    res.status(500).json({ err: "Internal server error" });
  }
};

export { login, logout, signup };
