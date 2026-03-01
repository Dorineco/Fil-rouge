import Alert from "../models/alert.model.js";

export const createAlert = async (req, res) => {
    try {
        const alert = new Alert({ ...req.body, userId: req.user.userId });
        await alert.save();
        res.status(201).json(alert);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getAlerts = async (req, res) => {
    const alerts = await Alert.find({ userId: req.user.userId });
    res.json(alerts);
};

// update & delete similaires