// pages/api/users/create.js
import connect from "../../../app/db/mongoose";
import mongoose from "mongoose";

// Define the User schema and model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    try {
      const mongooseConnection = await connect();

      // Check if the user already exists
      const existingUser = await UserModel.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Create the new user
      const newUser = await UserModel.create({ username, password });

      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error("User creation error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
