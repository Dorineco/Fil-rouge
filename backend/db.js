import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connecté !"))
    .catch(err => console.error("❌ Erreur MongoDB :", err));

export default mongoose;