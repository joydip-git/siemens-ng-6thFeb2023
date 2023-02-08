import { Inject, Injectable } from "@angular/core";
import { albums } from "src/data/albums";
import { IAlbumServiceContract } from "../models/album-service.contract";
import { Album } from "../models/album.model";
import { ALBUM_URL_TOKEN } from "../models/constants";

@Injectable()
export class AlbumService implements IAlbumServiceContract {

    constructor(@Inject(ALBUM_URL_TOKEN) private url: string) {
        console.log(this.url)
    }
    getAlbums(): Album[] {
        // const c: Album = { ...albums[0] }
        const copy = [...albums]
        return copy
    }
    getAlbum(id: number): Album | undefined {
        return albums.find(
            function (a) {
                return a.id === id
            }
        )
    }
}