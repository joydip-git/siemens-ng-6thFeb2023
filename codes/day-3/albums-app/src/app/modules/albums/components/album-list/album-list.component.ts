import { Component } from '@angular/core';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  //providers: [AlbumService]
})
export class AlbumListComponent {
  //albumRecords: Album[] | undefined;
  albumRecords?: Album[];
  constructor(private albumSvc: AlbumService) {
    this.albumRecords = this.albumSvc.getAlbums()
  }
}
