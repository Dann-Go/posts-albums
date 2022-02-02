export const baseURL = "https://jsonplaceholder.typicode.com";

export default class Api {
    static async getPosts() {
        const response = await fetch(`${baseURL}/posts`);
        return response.json();
    }

    static async getCommentsByPostId(postId) {
        const response = await fetch(`${baseURL}/comments?postId=${postId}`);
        return response.json();
    }

    static async getUsers() {
        const response = await fetch(`${baseURL}/users`);
        return await response.json()
    }

    static async getAlbums(){
        const response = await fetch(`${baseURL}/albums`);
        return await response.json();
    }

    static async getPhotosById(albumId){
        const response = await fetch(`${baseURL}/photos?albumId=${albumId}`);
        return await response.json();
    }
}















