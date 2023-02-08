import { Observable } from "rxjs";
import { Album } from "./album.model";

export interface IAlbumServiceContract {
    getAlbums(): Observable<Album[]>;
    getAlbum(id: number): Observable<Album>;
}