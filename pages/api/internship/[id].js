import { ObjectId } from "mongodb";
import connect from "../../../app/db/mongoose";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const db = await connect();
      const { id } = req.query;
      console.log(id);
      const internship = await db.connection
        .collection("students")
        .find({ internship_id: id })
        .toArray();

      if (internship) {
        res.status(200).json({ success: true, data: internship });
      } else {
        res.status(404).json({ success: false, error: "Students not found" });
      }
    } catch (error) {
      console.error("Error fetching internship details:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const db = await connect();
      console.log(req.body);
      if (req.url.includes("marks")) {
        const { student_name, mark, id } = req.body;
        await db.connection
          .collection("students")
          .updateOne(
            { internship_id: id, student_name: student_name },
            { $set: { mark: mark } }
          );
        res
          .status(200)
          .json({ success: true, message: "Mark updated successfully" });
      } else if (req.url.includes("descriptions")) {
        const { student_name, description, id } = req.body;

        await db.connection
          .collection("students")
          .updateOne(
            { internship_id: id, student_name: student_name },
            { $set: { description: description } }
          );
        res
          .status(200)
          .json({ success: true, message: "Description updated successfully" });
      } else {
        res.status(400).json({ success: false, error: "Invalid request" });
      }
    } catch (error) {
      console.error("Error updating internship details:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
