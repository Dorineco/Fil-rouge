import Post from "../models/posts.model.js";

class PostDAO {
    async create(postData) {
        return Post.create(postData);
    }

    async findById(id) {
        return Post.findById(id);
    }

    async getAll() {
        return Post.find();
    }

    async updateById(id, updateData) {
        return Post.findByIdAndUpdate(id, updateData, { new: true });
    }

    async deleteById(id) {
        return Post.findByIdAndDelete(id);
    }
}

export default new PostDAO();