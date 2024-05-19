// pages/api/internship/[id].js
import { getDbConnection } from "../../../app/db/mongodb";
import sql from "mssql";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const pool = await getDbConnection();
    const result = await pool.request().input("internship_id", sql.Int, id)
      .query(`
        SELECT 
          s.student_name,
          s.class,
          s.school,
          g.start_date,
          g.end_date,
          g.mark,
          g.description
        FROM StudentGroups g
        INNER JOIN Students s ON g.student_id = s.student_id
        WHERE g.internship_id = @internship_id
      `);

    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
