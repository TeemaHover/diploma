// pages/api/addInternship.js

import { InternshipModel } from "../../../app/schema/internship"; // Update path as needed
import connect from "../../../app/db/mongoose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connect(); // Connect to MongoDB
      const { employer, profession, start_date, end_date, salary } = req.body;
      const internship = new InternshipModel({
        employer,
        profession,
        start_date,
        end_date,
        salary,
      });
      await internship.save(); // Save the internship to the database
      res.status(201).json({ message: "Internship added successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
