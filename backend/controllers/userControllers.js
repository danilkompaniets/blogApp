import User from "../models/User.js";

export const registerUser = async (req, res) => {
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
      token: null,
    });
  } catch (err) {
    return res.status(500).json({ messgae: "smthn went wrong" });
  }
};

export { registerUser };
