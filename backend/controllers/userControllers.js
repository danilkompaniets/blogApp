import User from "../models/User.js";
import { authGuard } from "../middleware/authMiddleware.js";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    // ------------------- Check if user exists -------------------
    let user = await User.findOne({ email });

    if (user) {
      return res.status(404).json({ message: "user alredy exists" });
    }

    user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      verified: user.verified,
      admin: user.admin,
      token: await user.generateJWT(),
    });
  } catch (err) {
    return res.status(500).json({ messgae: "smthn went wrong" });
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      throw new Error("Email not found");
    }
    if (await user.comparePassword(password)) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
        token: await user.generateJWT(),
      });
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    next(error);
  }
};

export const userProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);
    if (user) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
      });
    } else {
      let err = new Error("User not found");
      err.statusCode = 404;
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

export { registerUser, loginUser, userProfile };
