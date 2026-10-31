import mongoose from "mongoose";

// const url = "mongodb+srv://somnath:somnath@cluster0.mcxbotq.mongodb.net/";
// const url =
//   "mongodb://somnath:somnath@ac-mohs1th-shard-00-00.mcxbotq.mongodb.net:27017,ac-mohs1th-shard-00-01.mcxbotq.mongodb.net:27017,ac-mohs1th-shard-00-02.mcxbotq.mongodb.net:27017/?ssl=true&replicaSet=atlas-nzgipm-shard-0&authSource=admin&appName=Cluster0/newDB";

  const url="mongodb://somnath:somnath@ac-mohs1th-shard-00-00.mcxbotq.mongodb.net:27017,ac-mohs1th-shard-00-01.mcxbotq.mongodb.net:27017,ac-mohs1th-shard-00-02.mcxbotq.mongodb.net:27017/newDB?ssl=true&replicaSet=atlas-nzgipm-shard-0&authSource=admin&appName=Cluster0"

export async function dbConnect() {
  try {
    await mongoose.connect(url);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Not Connected:", error);
  }
}
