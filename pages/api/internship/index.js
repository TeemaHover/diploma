import mongoose from "mongoose";
import { InternshipModel } from "../../../app/schema/main"; // Adjust the path as needed

export default async function handler(req, res) {
  try {
    // Fetch all internship data
    const internships = await InternshipModel.find();
    res.status(200).json({ success: true, data: internships });
  } catch (error) {
    console.error("Error fetching internship data:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
