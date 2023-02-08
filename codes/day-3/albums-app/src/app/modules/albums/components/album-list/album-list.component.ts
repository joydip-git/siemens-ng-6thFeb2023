import { Component, Inject } from '@angular/core';
import { IAlbumServiceContract } from '../../models/album-service.contract';
import { Album } from '../../models/album.model';
import { ALBUM_SERVICE_TOKEN } from '../../models/constants';
//import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  //providers: [AlbumService]
})
export class AlbumListComponent {
  //albumRecords: Album[] | undefined;
  private albumSvc?: IAlbumServiceContract;
  albumRecords?: Album[];
  constructor(
    @Inject(ALBUM_SERVICE_TOKEN) albumSvc: IAlbumServiceContract) {
    this.albumSvc = albumSvc
    this.albumRecords = this.albumSvc.getAlbums()
  }
}
