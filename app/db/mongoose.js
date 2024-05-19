// app/db/mongoose.js
import mongoose from "mongoose";

const uri =
  "mongodb+srv://yhandjamts1:Mx512yLP3IW68Rvu@intern.i2abnpb.mongodb.net/?retryWrites=true&w=majority&appName=intern"; // Replace with your actual MongoDB URI

let connection;

async function connect() {
  if (connection) return connection;

  try {
    connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected");
    return connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export default connect;
