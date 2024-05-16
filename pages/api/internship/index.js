// pages/api/internships.js
import { getDbConnection } from "../../../app/db/mssqldb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const pool = await getDbConnection();
    const result = await pool.request().query(`
      SELECT 
        i.internship_id,
        i.employer,
        i.profession,
        i.start_date,
        i.end_date,
        i.salary,
        COUNT(a.student_id) AS student_number
      FROM Internships i
      
    `);
    // LEFT JOIN Applications a ON i.internship_id = a.internship_id
    // GROUP BY
    //   i.internship_id,
    //   i.employer,
    //   i.profession,
    //   i.start_date,
    //   i.end_date,
    //   i.salary
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
