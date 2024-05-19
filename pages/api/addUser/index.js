// pages/api/addUser.js
import { addUser } from "../../../app/db/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body; // Assuming the request body contains user data
    const user = { username, password };

    try {
      const userId = await addUser(user);
      res.status(200).json({ userId });
    } catch (err) {
      res.status(500).json({ error: "Error adding user." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
