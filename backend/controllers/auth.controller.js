import dotenv from "dotenv";
dotenv.config();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { AuthDAO } from "../dao/auth.dao.js";


const SECRET_KEY = process.env.SECRET_KEY || 'secret';
const JWT_EXPIRES = '1h';

export const AuthService = {
    register: async (userData) => {
        const existing = await AuthDAO.findByEmail(userData.email);
        if (existing) throw new Error('Email déjà utilisé');

        const user = await AuthDAO.createUser(userData);
        return { id: user._id, username: user.username, email: user.email };
    },

    login: async ({ email, password }) => {
        const user = await AuthDAO.findByEmail(email);
        
        if (!user) throw new Error('Email ou mot de passe invalide');

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) throw new Error('Email ou mot de passe invalide');

        const token = jwt.sign({ id: user._id }, SECRET_KEY, {
            
            expiresIn: JWT_EXPIRES,
            
        });

        return { token, user: { id: user._id, username: user.username, email: user.email } };
    },

    verifyToken: (token) => {
        try {
            return jwt.verify(token, SECRET_KEY);
        } catch {
            throw new Error('Token invalide ou expiré');
        }
    },
};

export default AuthService;