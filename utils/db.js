import mongoose from "mongoose";

const connection = {};

async function connectDB() {
  if (connection.isConnected) {
    console.log("Already Connected to the DataBase");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Use Previous connection to the Database.");
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("New Connection to the Database.");
  connection.isConnected = db.connections[0].readyState;
}

async function disconnectDB() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("Database is Not disconnected!!");
    }
  }
}

const db = { connectDB, disconnectDB };

export default db;
