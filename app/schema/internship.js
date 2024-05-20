// Define the Internship schema
import mongoose from "mongoose";

const InternshipSchema = new mongoose.Schema({
  employer: { type: String, required: true },
  profession: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  salary: { type: Number, required: true },
  num_applicants: { type: Number, default: 0 },
});

const InternshipModel =
  mongoose.models.Internship || mongoose.model("Internship", InternshipSchema);

export default { InternshipModel };
