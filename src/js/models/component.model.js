export default class Component {
    createNode(template) {
        const node = document.createElement("div");
        node.innerHTML = template;
        return node;
    }
}