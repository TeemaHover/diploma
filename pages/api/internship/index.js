import connect from "../../../app/db/mongoose";
import mongoose from "mongoose";
import InternshipModel from "../../../app/schema/internship"; // Adjust the path as needed

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const db = await connect(); // Connect to MongoDB

      // Use the connection object to fetch data
      const internships = await db.connection
        .collection("internships")
        .find()
        .toArray();
      res.status(200).json({ success: true, data: internships });
    } catch (error) {
      console.error("Error fetching internship data:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
