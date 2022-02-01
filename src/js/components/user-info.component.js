import Component from "../models/component.model.js";

export default class UserInfo extends Component {
    constructor(user) {
        super();
        this.user = user;
    }

    get template() {
        if (!!this.user) {
            return `<div id="modalWindow">
                    <div id="modalWindowContent">
                        <div class="user-info">
                            <p class="user-info__text">
                                <span class="user-info__title">Id: </span>
                                <span class="user-info__data">${this.user?.id}</span>
                            </p>
                            <p class="user-info__text">
                                <span class="user-info__title">Name: </span>
                                <span class="user-info__data">${this.user?.name}</span>
                            </p>
                            <p class="user-info__text">
                                <span class="user-info__title">Username: </span>
                                <span class="user-info__data">${this.user?.username}</span>
                            </p>
                            <p class="user-info__text">
                                <span class="user-info__title">Email: </span>
                                <span class="user-info__data">${this.user?.email}</span>
                            </p>
                            <p class="user-info__text">
                                <span class="user-info__title">Address: </span>
                                <span class="user-info__data">${this.user?.address?.city}, ${this.user?.address?.street}, ${this.user?.address?.suite}, ${this.user?.address?.zipcode}</span>
                            </p>
                            <p class="user-info__text">
                                <span class="user-info__title">Phone: </span>
                                <span class="user-info__data">${this.user?.phone}</span>
                            </p>
                            <p class="user-info__text">
                                <span class="user-info__title">Website: </span>
                                <span class="user-info__data">${this.user?.website}</span>
                            </p>
                            <p class="user-info__text">
                                <span class="user-info__title">Company: </span>
                                <span class="user-info__data">${this.user?.company?.name}</span>
                            </p>
                            <button type="button" class="custom-btn modal-close-btn" id="modalCloseBtn">Close</button>
                        </div>
                    </div>
        </div>`
        }
        return `<div id="modalWindow">
                    <div id="modalWindowContent">
                        <div class="user-info">
                            <p class="user-info__text">
                                <span class="user-info__title">User: </span>
                                <span class="user-info__data">unknown</span>
                            </p>
                            <button type="button" class="custom-btn modal-close-btn" id="modalCloseBtn">Close</button>
                        </div>
                    </div>
        </div>`
    }

    createNode(template) {
        const node = super.createNode(template);
        const btn = node.querySelector("#modalCloseBtn");
        btn.addEventListener("click", () => {
            const body = document.getElementById("app-body");
            body.removeChild(node);
        })
        return node;
    }
}