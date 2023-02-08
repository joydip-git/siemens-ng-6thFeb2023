import { albums } from "src/data/albums";
// import { Album } from "../models/album.model";

export class AlbumService {
    getAlbums() {
        // const c: Album = { ...albums[0] }
        const copy = [...albums]
        return copy
    }
    getAlbum(id: number) {
        return albums.find(
            function (a) {
                return a.id === id
            }
        )
    }
}