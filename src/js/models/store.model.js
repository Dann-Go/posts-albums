export default class Store {
    data = {
        users: [],
        posts: [],
        albums: []
    }

    setUsers = (users) => this.data.users = users;
    setPosts = (posts) => this.data.posts = posts;
    setAlbums = (albums) => this.data.albums = albums;


    get users() {
        return [...this.data.users];
    }

    get posts() {
        return [...this.data.posts];
    }

    get albums() {
        return [...this.data.albums];
    }
}