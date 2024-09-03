import mongoose from "mongoose";

const dbCon = {
  isConnected: false,
};

export async function connectDB() {
  if (dbCon.isConnected) return;

  try {
    const db = await mongoose.connect(
      "mongodb+srv://marcoslombardo28:hdHKYo82mJFPggJy@techtest.1f6yd.mongodb.net/?retryWrites=true&w=majority&appName=techtest"
    );
    console.log(db.connection.db?.databaseName);

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
