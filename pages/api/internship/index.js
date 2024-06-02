import connect from "../../../app/db/mongoose";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const db = await connect();

      // Define the aggregation pipeline
      const pipeline = [
        {
          $addFields: {
            intern_id: { $toString: "$_id" },
          },
        },
        {
          $lookup: {
            from: "students",
            localField: "intern_id",
            foreignField: "internship_id",
            as: "num_applicants",
          },
        },
        {
          $addFields: {
            num_applicants: { $size: "$num_applicants" },
          },
        },
      ];

      // Execute the aggregation pipeline
      const internships = await db.connection
        .collection("internships")
        .aggregate(pipeline)
        .toArray();

      res.status(200).json({ success: true, data: internships });
    } catch (error) {
      console.error("Error fetching internship data:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
