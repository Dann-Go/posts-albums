import Photo from "../models/photo.model.js";

export function mapResponseToPhoto(response) {
    return response.map(photo =>
        new Photo(
            photo?.albumId,
            photo?.id,
            photo?.title,
            photo?.url,
            photo?.thumbnailUrl
        ));
}