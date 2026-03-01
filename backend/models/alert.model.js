import mongoose from "../db.js";

const alertSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    stockSymbol: { type: String, required: true },
    targetPrice: { type: Number, required: true },
    type: { type: String, enum: ["buy", "sell"], required: true },
    createdAt: { type: Date, default: Date.now },
    active: { type: Boolean, default: true },
});

const Alert = mongoose.model("Alert", alertSchema);
export default Alert;