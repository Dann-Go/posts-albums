import Store from "./models/store.model.js";
import AlbumsPageComponent from "./components/albums.page.component.js";
import Api from "./utils/api.js";
import AlbumPreview from "./components/album-preview.component.js";
import User from "./models/user.model.js";
import {mapResponseToPhoto} from "./utils/mapper.js";

window.onload = async function onLoad() {
    const store = new Store();
    const page = new AlbumsPageComponent(store);

    const albums = await Api.getAlbums().then(albumsResponse => {
        const albumsPromises = albumsResponse.map(album =>
            Api.getPhotosById(album.id).then(photosResponse => {
                const photos = mapResponseToPhoto(photosResponse);
                return new AlbumPreview(album.userId, album.id, album.title, photos);
            })
        );
        return Promise.all(albumsPromises);
    });


    store.setAlbums(albums);
    page.initAlbumsList(albums);

    const usersResponse = await Api.getUsers();
    const users = usersResponse.map(user => new User(user.id, user.name, user.username, user.email, user.address,
        user.phone, user.website, user.company));
    store.setUsers(users);
    page.initUsersList(users);

}
