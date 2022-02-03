import Component from "../models/component.model.js";

export default class AlbumImage extends Component {
    constructor(url) {
        super();
        this.url = url;
    }

    createNode() {
        const node = document.createElement("img");
        node.classList.add("image-list__img");
        node.src = this.url;
        node.style.width = "100%";
        return node;
    }
}