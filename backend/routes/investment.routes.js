import express from "express";
import {
    createInvestment,
    getInvestments,
    getInvestmentById,
    updateInvestment,
    deleteInvestment
} from "../controllers/investment.controller.js";

import { validateInvestment, validateInvestmentId } from "../middlewares/investment.middleware.js";

const router = express.Router();

// Création d'un investissement
router.post("/", validateInvestment, createInvestment);

// Récupération de tous les investissements de l'utilisateur
router.get("/", getInvestments);

// Récupération d'un investissement par ID
router.get("/:id", validateInvestmentId, getInvestmentById);

// Mise à jour d'un investissement
router.put("/:id", validateInvestmentId, validateInvestment, updateInvestment);

// Suppression d'un investissement
router.delete("/:id", validateInvestmentId, deleteInvestment);

export default router;