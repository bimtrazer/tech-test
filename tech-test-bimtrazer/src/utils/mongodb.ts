import mongoose from "mongoose";

const dbCon = {
  isConnected: false,
};

export async function connectDB() {
  if (dbCon.isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "");

    dbCon.isConnected = db.connections[0].readyState === 1;
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
}

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error", err);
});
