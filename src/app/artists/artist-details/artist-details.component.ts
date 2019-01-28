import { Component, Input } from '@angular/core';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent {
  @Input()
  artist: Artist;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor(private artistService: ArtistService) { }

  createArtist(artist: Artist) {
    this.artistService.createArtist(artist).then((newArtist: Artist) => {
      this.createHandler(newArtist);
    });
  }

  updateSArtist(artist: Artist): void {
    this.artistService.updateArtist(artist).then((updatedArtist: Artist) => {
      this.updateHandler(updatedArtist);
    });
  }
  deleteArtist(artistId: String): void {
    this.artistService.deleteArtist(artistId).then((deletedArtistId: String) => {
      this.deleteHandler(deletedArtistId);
    });
  }

}

