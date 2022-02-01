export default class Store {
    data = {
        users: [],
        posts: [],
        comments: [],
        albums: []
    }

    setUsers = (users) => this.data.users = users;
    setPosts = (posts) => this.data.posts = posts;
    setComments = (comments) => this.data.comments = comments;
    setAlbums = (albums) => this.data.albums = albums;

    // get users() {
    //     return JSON.parse(JSON.stringify(this.data.users));
    // }
    //
    // get posts() {
    //     return JSON.parse(JSON.stringify(this.data.posts));
    // }
    //
    // get comments() {
    //     return JSON.parse(JSON.stringify(this.data.comments));
    // }
    //
    // get albums() {
    //     return JSON.parse(JSON.stringify(this.data.albums));
    // }

    get users() {
        return [...this.data.users];
    }

    get posts() {
        return [...this.data.posts];
    }

    get comments() {
        return [...this.data.comments];
    }

    get albums() {
        return [...this.data.albums];
    }
}