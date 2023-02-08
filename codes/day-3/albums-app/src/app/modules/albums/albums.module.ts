import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumService } from './services/album.service';



@NgModule({
  declarations: [
    AlbumListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [AlbumService],
  exports: [AlbumListComponent]
})
export class AlbumsModule { }
