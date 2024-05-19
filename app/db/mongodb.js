// // app/db/mongodb.js
// import { MongoClient } from "mongodb";

// const uri =
//   "mongodb+srv://yhandjamts1:Mx512yLP3IW68Rvu@intern.i2abnpb.mongodb.net/?retryWrites=true&w=majority&appName=intern"; // Replace with your actual MongoDB URI
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// };

// let client;
// let clientPromise;

// if (!clientPromise) {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect().then(() => client);
// }

// async function addUser(user) {
//   const dbClient = await clientPromise;
//   const db = dbClient.db("intern"); // Replace with your actual database name
//   const usersCollection = db.collection("users");

//   try {
//     const result = await usersCollection.insertOne(user);
//     console.log(`User added successfully with ID: ${result.insertedId}`);
//     return result.insertedId;
//   } catch (err) {
//     console.error("Error adding user to MongoDB:", err);
//     throw err;
//   }
// }

// export default { clientPromise, addUser };

// app/db/mongodb.js
import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://yhandjamts1:Mx512yLP3IW68Rvu@intern.i2abnpb.mongodb.net/?retryWrites=true&w=majority&appName=intern"; // Replace with your actual MongoDB URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!clientPromise) {
  client = new MongoClient(uri, options);
  clientPromise = client.connect().then(() => client);
}

export { clientPromise };
