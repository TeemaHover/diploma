import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const StudentSchema = new mongoose.Schema({
  Internship_id: { type: String, required: true },
  student_name: { type: String, required: true },
  class: { type: String, required: true },
  school: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  mark: { type: Number, required: false },
  description: { type: String, default: "" },
  student_lname: { type: String, required: true },
  sex: { type: String, required: true },
});
const StudentModel =
  mongoose.models.Student || mongoose.model("Student", StudentSchema);

export default { StudentModel };
