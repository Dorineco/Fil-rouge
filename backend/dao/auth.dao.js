import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

export const AuthDAO = {
    // Créer un nouvel utilisateur
    createUser: async ({ username, email, password }) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        return User.create({ username, email, password: hashedPassword });
    },

    // Trouver un utilisateur par email
    findByEmail: (email) => User.findOne({ email }),

    // Trouver un utilisateur par ID
    findById: (id) => User.findById(id),
};

