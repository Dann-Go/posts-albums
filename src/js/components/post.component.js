import Component from "../models/component.model.js";


export default class Post extends Component {
    constructor(userId, id, title, body, comments) {
        super();
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
        this.showComments = false;
        this.comments = comments;
    }

    get template() {
        return `<div class="post" id="post-${this.id}">
        <div class="post__header">
            <div class="post__title">${this.title}</div>
            <div class="post__user" id="user-${this.userId}">
                <img src="../images/abstract-user-flat-1.svg" alt="user"/>
            </div>
        </div>
        <div class="post__body">${this.body}</div>
        <div class="post__comments">
            <div class="comments__toolbar">
                <button type="button" class="custom-btn visibility-comments-btn" id="showCommentsBtn">Show Comments</button>
            </div>
            <ul class="comments__list" id="commentsList-${this.id}"></ul>
        </div>
    </div>`
    }
}

