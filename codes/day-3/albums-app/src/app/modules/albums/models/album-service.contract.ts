import { Album } from "./album.model";

export interface IAlbumServiceContract {
    getAlbums(): Album[];
    getAlbum(id: number): Album | undefined;
}