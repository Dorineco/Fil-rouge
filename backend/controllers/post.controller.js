import postDAO from "../dao/post.dao.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.SECRET_KEY;

// ============================
// CREATE POST
// ============================
export const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;

        // Récupération de l'auteur depuis le token
        // const token = req.headers.authorization?.split(" ")[1];
        // if (!token) return res.status(401).json({ message: "Token manquant" });

        // const decoded = jwt.verify(token, JWT_SECRET);
        const author = req.user.id;

        const post = await postDAO.create({ title, content, author });

        res.status(201).json({ message: "Post créé", post });

    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

// ============================
// GET ALL POSTS
// ============================
export const getAllPosts = async (req, res) => {
    try {
        const posts = await postDAO.getAll();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

// ============================
// GET POST BY ID
// ============================
export const getPostById = async (req, res) => {
    try {
        const post = await postDAO.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: "Post non trouvé" });
        }

        res.json(post);

    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

// ============================
// UPDATE POST
// ============================
export const updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await postDAO.updateById(req.params.id, { title, content });

        if (!post) return res.status(404).json({ message: "Post non trouvé" });

        res.json({ message: "Post mis à jour", post });

    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

// ============================
// DELETE POST
// ============================
export const deletePost = async (req, res) => {
    try {
        const post = await postDAO.deleteById(req.params.id);

        if (!post) return res.status(404).json({ message: "Post non trouvé" });

        res.json({ message: "Post supprimé avec succès" });

    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};


