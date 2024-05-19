// pages/api/login.js
import { clientPromise } from "../../../app/db/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    console.log(username);
    console.log(password);
    try {
      const client = await clientPromise;
      const db = client.db();

      const user = await db.collection("users").findOne({ username });
      console.log(user);
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
