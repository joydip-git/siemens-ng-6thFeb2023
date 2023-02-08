import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumService } from './services/album.service';
import { ALBUM_SERVICE_TOKEN, ALBUM_URL, ALBUM_URL_TOKEN, SERVICE_TYPE } from './models/constants';
import { HttpClientModule } from "@angular/common/http";

// const svc = new AlbumService()
@NgModule({
  declarations: [
    AlbumListComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  //providers: [AlbumService],
  providers: [
    {
      provide: ALBUM_URL_TOKEN,
      useValue: ALBUM_URL
    },
    {
      provide: ALBUM_SERVICE_TOKEN,
      useClass: SERVICE_TYPE
    }
  ],
  exports: [AlbumListComponent]
})
export class AlbumsModule { }
