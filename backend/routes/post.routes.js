import { Router } from "express";
import {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
} from "../controllers/post.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js"; // Vérifie le JWT

const router = Router();

// CRUD Posts
router.post("/", verifyToken, createPost);       // Créer un post (JWT obligatoire)
router.get("/", getAllPosts);                    // Lister tous les posts
router.get("/:id", getPostById);                 // Récupérer un post
router.put("/:id", verifyToken, updatePost);   // Modifier un post (JWT obligatoire)
router.delete("/:id", verifyToken, deletePost);// Supprimer un post (JWT obligatoire)


export default router;