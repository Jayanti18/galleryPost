import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';
import { ArtistDetailsComponent } from '../artist-details/artist-details.component';


@Component({
  selector: 'artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
  providers: [ArtistService]
})
export class ArtistListComponent implements OnInit {

  artists: Artist[]
  selectedArtist: Artist

  constructor(private artistService: ArtistService) { }

  ngOnInit() {

    this.artistService
    .getArtists()
    .then((artists: Artist[]) => {
      this.artists = artists.map((artist) => {
        return artist;
      });
    });
  }

  //getIndexofArtist to the artist-list.component.ts
  private getIndexOfArtist = (artistId: String) => {
    return this.artists.findIndex((artist) => {
      return artist._id === artistId;
    });
  }

  selectArtist(artist: Artist) {
    this.selectedArtist = artist
  }

  createNewArtist() {
    var artist: Artist = {
      name: '',
      email: '',
      phoneNum: '',
      present: ''

    };
 this.selectArtist(artist);
  }

  deleteArtist = (artistId: String) => {
    var idx = this.getIndexOfArtist(artistId);
    if (idx !== -1) {
      this.artists.splice(idx, 1);
      this.selectArtist(null);
    }
    return this.artists;
  }

  addArtist = (artist: Artist) => {
    this.artists.push(artist);
    this.selectArtist(artist);
    return this.artists;
  }

  updateArtist = (artist: Artist) => {
    var idx = this.getIndexOfArtist(artist._id);
    if (idx !== -1) {
      this.artists[idx] = artist;
      this.selectArtist(artist);
    }
    return this.artists;
  }

}
