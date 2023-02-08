import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumsModule } from './modules/albums/albums.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AlbumsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
