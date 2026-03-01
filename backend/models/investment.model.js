import mongoose from "mongoose";

const investmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    capital: { type: Number, required: true },
    monthlySavings: { type: Number, default: 0 },
    years: { type: Number, required: true },
    annualRate: { type: Number, required: true },
    intervalMonths: { type: Number, default: 12 },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Investment", investmentSchema);