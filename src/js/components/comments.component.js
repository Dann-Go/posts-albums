import Component from "../models/component.model.js";
import UserInfo from "./user-info.component.js";

export default class Comment extends Component {
    constructor(postId, id, name, email, body, userId, store) {
        super();
        this.postId = postId;
        this.id = id;
        this.name = name;
        this.email = email;
        this.body = body;
        this.userId = userId;
        this.store = store;
    }

    get template() {
        return `<div class="comment">
                        <div class="comment__header">
                            <div class="comment__tittle">${this.name}</div>
                            <div class="comment__user" id="user-${this.userId}">
                                <img src="images/abstract-user-flat-1.svg" alt="user"/>
                            </div>
                        </div>
                            <div class="comment__body">${this.body}</div>
                    </div>`
    }

    createNode(template) {
        const node = document.createElement("li");
        node.innerHTML = template;
        const user = node.querySelector(`#user-${this.userId}`);
        user.addEventListener("click", () => {
            const owner = this.store.users.find(u => u.id == this.userId);
            const userComponent = new UserInfo(owner);
            const modalTemplate = userComponent.template;
            const pageBody = document.getElementById("app-body");
            pageBody.prepend(userComponent.createNode(modalTemplate));
        });
        return node;
    }
}