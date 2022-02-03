import UserInfo from "./user-info.component.js";
import Api from "../utils/api.js";
import Comment from "./comments.component.js";
import Loader from "./loader.component.js";

export default class PostsPage {
    constructor(store) {
        this.postsList = document.getElementById("postsList");
        this.userList = document.getElementById("users");
        this.body = document.getElementById("app-body");
        this.store = store;

        this.userList.addEventListener("change", (event) => {
            const userId = event.target.value;
            const posts = this.store.posts.filter(post => post.userId == userId);
            this.updatePostsList(posts);
        })
    }

    initPostsList(posts) {
        posts.forEach(post => {
            const template = post.template;
            const node = post.createNode(template);
            const userAvatar = node.childNodes[0].childNodes[1];
            userAvatar.addEventListener("click", () => {
                const user = this.store.users.find(u => u.id == post.userId);
                const userComponent = new UserInfo(user);
                const modalTemplate = userComponent.template;
                this.body.prepend(userComponent.createNode(modalTemplate));
            })
            const commentShowBtn = node.querySelector("#showCommentsBtn");
            commentShowBtn.addEventListener("click", async () => {
                if (post.showComments === false && post.comments.length === 0) {
                    const loader = this.initLoader();
                    this.showLoader(node, loader);
                    const commentsResponse = await Api.getCommentsByPostId(post.id);
                    const comments = commentsResponse.map(comment => new Comment(comment.postId, comment.id,
                        comment.name, comment.email, comment.body, this.store.users.find(u => u.email == comment.email), this.store));
                    commentShowBtn.textContent = "Hide Comments";
                    post.showComments = true;
                    this.deleteLoader(node, loader);
                    this.initCommentsList(comments);
                    post.comments = comments;
                } else if (post.showComments === false && post.comments.length !== 0) {
                    commentShowBtn.textContent = "Hide Comments";
                    post.showComments = true;
                    this.initCommentsList(post.comments);
                } else {
                    const commentList = document.getElementById(`commentsList-${post.id}`);
                    console.log(commentList);
                    commentList.innerHTML = "";
                    commentShowBtn.textContent = "Show Comments";
                    post.showComments = false;
                }
            })
            this.postsList.append(node);
        })
    }

    updatePostsList(posts) {
        this.postsList.innerHTML = "";
        this.initPostsList(posts);
    }

    initUsersList(users) {
        users.forEach(user => {
            const opt = document.createElement("option");
            opt.value = user.id;
            opt.textContent = user.username;
            this.userList.append(opt);
        })
    }

    initCommentsList(comments) {
        comments.forEach(comment => {
            const template = comment.template;
            const node = comment.createNode(template);
            const commentList = document.getElementById(`commentsList-${comment.postId}`);
            commentList.appendChild(node);
        })
    }

    initLoader() {
        const loader = new Loader();
        const template = loader.template;
        return loader.createNode(template);
    }

    showLoader(node, loader) {
        node.childNodes[0].appendChild(loader);
    }

    deleteLoader(node, loader) {
        node.childNodes[0].removeChild(loader);
    }

}