import Component from "../models/component.model.js";

export default class Loader extends Component {
    constructor() {
        super();
    }

    get template() {
        return `<div class="loader__wrapper">
                    <div class="loader"></div>
                </div>`;
    }
}