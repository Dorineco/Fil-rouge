import { Router } from "express";
import { getStockQuote } from "../services/yahooFinance.js";

const router = Router();

// GET /api/finance/:symbol
router.get("/:symbol", async (req, res) => {
    const { symbol } = req.params;

    try {
        const quote = await getStockQuote(symbol);
        res.json(quote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;