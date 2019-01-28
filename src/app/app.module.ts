import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistDetailsComponent } from './artists/artist-details/artist-details.component';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';
import { HttpModule } from '@angular/http';
import { ArtistService } from './artists/artist.service';

@NgModule({
  declarations: [
    AppComponent,
    ArtistDetailsComponent,
    ArtistListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
