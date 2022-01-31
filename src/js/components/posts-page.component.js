import UserInfo from "./user-info.component.js";

export default class PostsPage {
    constructor(store) {
        this.postsList = document.getElementById("postsList");
        this.userList = document.getElementById("users");
        this.commentList = document.getElementById("commentsList");
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

    //TODO
    initCommentsList(comments) {

    }


}