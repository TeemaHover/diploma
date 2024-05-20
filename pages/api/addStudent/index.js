// pages/api/addStudent.js

import connect from "../../../app/db/mongoose";
import StudentModel from "../../../app/schema/main";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connect(); // Connect to MongoDB
      const {
        student_name,
        studentClass,
        school,
        start_date,
        end_date,
        mark,
        description,
      } = req.body;

      const student = new StudentModel({
        student_name,
        studentClass,
        school,
        start_date,
        end_date,
        mark,
        description,
      });

      await student.save(); // Save the student to the database
      res.status(201).json({ message: "Student added successfully" });
    } catch (error) {
      console.error("Error adding student:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
