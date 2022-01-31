const baseURL = "https://jsonplaceholder.typicode.com";

export default class Api {
    static async getPosts() {
        const response = await fetch(`${baseURL}/posts`);
        return response.json();
    }

    static async getPostsByUserId(userId) {
    }

    static async getCommentsByPostId(postId) {
    }

    static async getUsers() {
        const response = await fetch(`${baseURL}/users`);
        return await response.json()
    }

    static async getUserById(userId) {
    }
}















