import UserInfo from "./user-info.component.js";

export default class AlbumsPageComponent {
    constructor(store) {
        this.albumsList = document.getElementById("albumsList");
        this.usersList = document.getElementById("users");
        this.body = document.getElementById("app-body")
        this.store = store;

        this.usersList.addEventListener("change", (event) => {
            const userId = event.target.value;
            const albums = this.store.albums.filter(album => album.userId == userId);
            this.updateAlbumList(albums);
        })
    }

    initAlbumsList(albums) {
        albums.forEach(album => {
            const template = album.template;
            const node = album.createNode(template);
            const userAvatar = node.childNodes[0].childNodes[1];
            console.log();
            userAvatar.addEventListener("click", () => {
                const user = this.store.users.find(u => u.id == album.userId);
                const userComponent = new UserInfo(user);
                const modalTemplate = userComponent.template;
                this.body.prepend(userComponent.createNode(modalTemplate));
            })
            this.albumsList.append(node);
        })
    }

    updateAlbumList(albums) {
        this.albumsList.innerHTML = "";
        this.initAlbumsList(albums);
    }

    initUsersList(users) {
        users.forEach(user => {
            const opt = document.createElement("option");
            opt.value = user.id;
            opt.textContent = user.username;
            this.usersList.append(opt);
        })
    }
}