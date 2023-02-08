import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { IAlbumServiceContract } from '../../models/album-service.contract';
import { Album } from '../../models/album.model';
import { ALBUM_SERVICE_TOKEN } from '../../models/constants';
//import { AlbumService } from '../../services/album.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  //providers: [AlbumService]
})
export class AlbumListComponent implements OnInit, OnDestroy {
  albumRecords?: Album[];
  errorMessage = ''
  receivedResponse = false

  private albumSubscription?: Subscription;

  constructor(@Inject(ALBUM_SERVICE_TOKEN) private albumSvc: IAlbumServiceContract) {
  }

  ngOnInit(): void {

    this.albumSubscription = this.albumSvc
      .getAlbums()
      .subscribe({
        next: (data) => {
          this.receivedResponse = true
          this.albumRecords = data.slice(0, 10)
          this.errorMessage = ''
        },
        error: (err: any) => {
          this.receivedResponse = true
          this.albumRecords = undefined
          this.errorMessage = err.message
        },
        //complete: () => { }
      })
  }
  ngOnDestroy(): void {
    this.albumSubscription?.unsubscribe()
  }
}
