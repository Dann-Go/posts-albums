import Component from "../models/component.model.js";

export default class AlbumPage extends Component {
    constructor() {
        super();
        this.imageList = document.getElementById("imageList")
    }

    initImageList(images) {
        const columns = document.getElementsByClassName("image-list__column");
        const flexSize = 100 / columns.length;

        images.forEach((image, index) => {
            const imageNode = image.createNode();
            columns[index % columns.length].append(imageNode);
        });

        for(let column of columns) {
            column.style.flex = `${flexSize}%`;
            column.style.msFlex = `${flexSize}%`;
        }
    }

}