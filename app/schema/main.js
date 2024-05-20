// Define the Internship schema
import mongoose from "mongoose";

const InternshipSchema = new mongoose.Schema({
  employer: { type: String, required: true },
  profession: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  salary: { type: Number, required: true },
  num_applicants: { type: Number, default: 0 }, // Default to 0 applicants
});

// Define the Student schema
const StudentSchema = new mongoose.Schema({
  student_name: { type: String, required: true },
  class: { type: String, required: true },
  school: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  mark: { type: Number, required: false },
  description: { type: String },
});

// Define the Internship model
const InternshipModel =
  mongoose.models.Internship || mongoose.model("Internship", InternshipSchema);

// Define the Student model
const StudentModel =
  mongoose.models.Student || mongoose.model("Student", StudentSchema);

export default { InternshipModel, StudentModel };
