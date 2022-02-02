import Api from "./utils/api.js";
import {mapResponseToPhoto} from "./utils/mapper.js";
import AlbumImage from "./components/album-image.component.js";
import AlbumPage from "./components/album-page.component.js";

window.onload = async function () {
    const page = new AlbumPage();

    const albumId = getAlbumId();
    console.log(albumId);

    const photosResponse = await Api.getPhotosById(albumId);
    const photos = mapResponseToPhoto(photosResponse);
    const images = photos.map(photo => new AlbumImage(photo?.url));

    page.initImageList(images);
}

function getAlbumId() {
    const params = getUrlSearchParams(window.location.search);
    return params.id;
}

function getUrlSearchParams(url) {
    return new Proxy(new URLSearchParams(url), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
}


