import { connect as _connect } from "mongoose";
import "dotenv/config";

export async function connect() {
  try {
    await _connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Unable to connect to MongoDB", error);
  }
}
