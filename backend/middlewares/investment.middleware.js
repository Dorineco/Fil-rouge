import { body, param, validationResult } from "express-validator";

// Validation des champs pour création / mise à jour
export const validateInvestment = [
    body("amount")
        .exists().withMessage("Amount is required")
        .isFloat({ gt: 0 }).withMessage("Amount must be a positive number"),
    body("type")
        .exists().withMessage("Type is required")
        .isString().withMessage("Type must be a string")
        .isLength({ max: 50 }).withMessage("Type is too long"),
    body("description")
        .optional()
        .isString().withMessage("Description must be a string")
        .isLength({ max: 200 }).withMessage("Description is too long"),
    body("date")
        .optional()
        .isISO8601().toDate().withMessage("Date must be valid"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        next();
    }
];

// Validation de l'ID pour les routes avec paramètre
export const validateInvestmentId = [
    param("id").isMongoId().withMessage("Invalid investment ID"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        next();
    }
];