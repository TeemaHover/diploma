import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  Internship_id: { type: String, required: true },
  student_name: { type: String, required: true },
  class: { type: String, required: true },
  school: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  mark: { type: Number, required: false },
  description: { type: String },
});
const StudentModel =
  mongoose.models.Student || mongoose.model("Student", StudentSchema);

export default { StudentModel };
