import { Inject, Injectable } from "@angular/core";
import { IAlbumServiceContract } from "../models/album-service.contract";
import { Album } from "../models/album.model";
import { ALBUM_URL_TOKEN } from "../models/constants";
import { HttpClient } from "@angular/common/http";
import { Observable, map, take } from "rxjs";

@Injectable()
export class AlbumService implements IAlbumServiceContract {

    constructor(
        @Inject(ALBUM_URL_TOKEN) private url: string,
        private _http: HttpClient
    ) { }
    getAlbums(): Observable<Album[]> {
        //return this._http.get<Album[]>(this.url)
        return this._http
            .get(this.url)
            .pipe(
                map(
                    function (resp: any): Album[] {
                        const records: Album[] = [];
                        for (const a of resp) {
                            records.push({
                                id: a.id,
                                albumId: a.albumId,
                                title: a.title,
                                thumbnailUrl: a.thumbnailUrl,
                                url: a.url
                            })
                        }
                        return records
                    }
                )
            )
    }
    getAlbum(id: number): Observable<Album> {
        return this._http.get<Album>(`${this.url}/${id}`)
    }
}