import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; //HERE JWT IS THE COOKIE NAME
    if (!token) {
      return res.status(401).json({
        err: "Unauthorized - No token provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);

    if (!decoded) {
      return res.status(401).json({
        err: "Unauthorized - Invalid Token",
      });
    }

    const user = await User.findById(decoded.userId).select("-password");
    // console.log(user);

    req.user = user;
    // WE CALL NEXT FUNCTN IN ORDER TO CALL THE NEXT messageSent FUNCTN AND NOT JUST END HERE.
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res.status(500).json({ err: "Internal server Error" });
  }
};

export default protectRoute;
