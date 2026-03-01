import User from "../models/User.js";

class UserDAO {

    async create(userData) {
        return User.create(userData);
    }

    async findByEmail(email) {
        return User.findOne({ email });
    }

    async findById(id) {
        return User.findById(id);
    }

    async getAll() {
        return User.find();
    }

    async deleteById(id) {
        return User.findByIdAndDelete(id);
    }
}

export default new UserDAO();