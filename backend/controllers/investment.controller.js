import Investment from "../models/investment.model.js";

// Création d'un investissement
export const createInvestment = async (req, res) => {
    try {
        const investment = new Investment({ ...req.body, userId: req.user.userId });
        await investment.save();
        res.status(201).json(investment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Récupération de tous les investissements
export const getInvestments = async (req, res) => {
    try {
        const investments = await Investment.find({ userId: req.user.userId }).sort({ createdAt: -1 });
        res.json(investments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Récupération par ID
export const getInvestmentById = async (req, res) => {
    try {
        const investment = await Investment.findOne({ _id: req.params.id, userId: req.user.userId });
        if (!investment) return res.status(404).json({ message: "Investment not found" });
        res.json(investment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Mise à jour
export const updateInvestment = async (req, res) => {
    try {
        const investment = await Investment.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.userId },
            req.body,
            { new: true, runValidators: true }
        );
        if (!investment) return res.status(404).json({ message: "Investment not found" });
        res.json(investment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Suppression
export const deleteInvestment = async (req, res) => {
    try {
        const investment = await Investment.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
        if (!investment) return res.status(404).json({ message: "Investment not found" });
        res.json({ message: "Investment deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};