// pages/api/login.js
import connect from "../../../app/db/mongoose";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    try {
      const mongooseConnection = await connect();
      let UserModel;
      if (mongoose.models.User) {
        UserModel = mongoose.model("User");
      } else {
        UserModel = mongoose.model("User", UserSchema);
      }

      const user = await UserModel.findOne({ username });

      if (!user) {
        res.status(401).json({ message: "User not found" });
        return;
      }

      if (user.password !== password) {
        res.status(401).json({ message: "Invalid password" });
        return;
      }

      res.status(200).json({ message: "Login successful", user });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
