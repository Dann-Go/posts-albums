import Component from "../models/component.model.js";
const baseURL = `${window.location.pathname.split("/")[0]}/posts-albums/src/pages`;

export default class AlbumPreview extends Component {
    constructor(userId, id, title, photos) {
        super();
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.photos = photos;
    }

    get template() {
        return `<div class="album" id="album-${this.id}">
                    <div class="album__header">
                        <div class="album__title">${this.title}</div>
                        <div class="album__user" id="user-${this.userId}">
                            <img src="../images/abstract-user-flat-1.svg" alt="user"/>
                        </div>
                    </div>
                    <a href="${baseURL}/album.html?id=${this.id}">
                        <div class="album__body">
                            <img src=${this.photos[0]?.thumbnailUrl} alt="user"/>
                            <img src=${this.photos[1]?.thumbnailUrl} alt="user"/>
                            <img src=${this.photos[2]?.thumbnailUrl} alt="user"/>
                            <img src=${this.photos[3]?.thumbnailUrl} alt="user"/>
                        </div>
                    </a>
                </div>`
    }
}
