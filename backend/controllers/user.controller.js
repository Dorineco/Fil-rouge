import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userDAO from "../dao/userDAO.js";

const JWT_SECRET = process.env.JWT_SECRET;

// ============================
// REGISTER
// ============================
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await userDAO.findByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: "Utilisateur déjà existant" });
        }

        // Hash du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Création utilisateur
        const user = await userDAO.create({
            username,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            message: "Utilisateur créé avec succès",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            },
        });

    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

// ============================
// LOGIN
// ============================
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userDAO.findByEmail(email);
        if (!user) {
            return res.status(400).json({ message: "Utilisateur non trouvé" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Mot de passe incorrect" });
        }

        // Création du token
        const token = jwt.sign(
            { id: user._id },
            JWT_SECRET,
            { expiresIn: "24h" }
        );

        res.json({
            message: "Connexion réussie",
            token,
        });

    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

// ============================
// GET ALL USERS
// ============================
export const getAllUsers = async (req, res) => {
    try {
        const users = await userDAO.getAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

// ============================
// GET USER BY ID
// ============================
export const getUserById = async (req, res) => {
    try {
        const user = await userDAO.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.json(user);

    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

// ============================
// DELETE USER
// ============================
export const deleteUser = async (req, res) => {
    try {
        const user = await userDAO.deleteById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.json({ message: "Utilisateur supprimé avec succès" });

    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};