import Post from "./components/post.component.js";
import Api from "./utils/api.js";
import User from "./models/user.model.js";
import PostsPage from "./components/posts-page.component.js";
import Store from "./models/store.model.js";

window.onload = async function onLoad() {
    const store = new Store();
    const page = new PostsPage(store);

    const postsResponse = await Api.getPosts();
    const posts = postsResponse.map(post => new Post(post.userId, post.id, post.title, post.body, []));
    store.setPosts(posts);
    await page.initPostsList(posts);

    const usersResponse = await Api.getUsers();
    const users = usersResponse.map(user => new User(user.id, user.name, user.username, user.email, user.address,
        user.phone, user.website, user.company));
    store.setUsers(users);
    page.initUsersList(users);
}