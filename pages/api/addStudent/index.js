import connect from "../../../app/db/mongoose";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const db = await connect();

      const {
        internship_id,
        student_name,
        studentClass,
        school,
        start_date,
        end_date,
        mark,
        description,
        student_lname,
        sex,
      } = req.body;

      const collection = db.connection.collection("students");
      console.log(internship_id);
      const studentDocument = {
        internship_id,
        student_name,
        studentClass,
        school,
        start_date,
        end_date,
        mark,
        description,
        student_lname,
        sex,
      };

      await collection.insertOne(studentDocument);
      console.log(internship_id);
      const obj = new ObjectId(internship_id);
      const result = await db.connection
        .collection("internships")
        .updateOne({ _id: obj }, { $inc: { num_applicants: 1 } });
      if (result.matchedCount === 0) {
        return res.status(404).json({ error: "Internship not found" });
      }

      res.status(201).json({ message: "Student added successfully" });
    } catch (error) {
      console.error("Error adding student:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
