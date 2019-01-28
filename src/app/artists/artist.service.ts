import { Injectable } from '@angular/core';
import { Artist } from './artist';
import { Http, Response } from '@angular/http';



@Injectable()
  // providedIn: 'root'
// })
export class ArtistService {
  private artistsUrl = '/api/art';

  constructor (private http: Http) {}

     // get("/api/contacts")
  getArtists(): Promise<void | Artist[]> {
    return this.http.get(this.artistsUrl)
                 .toPromise()
                 .then(response => response.json() as Artist[])
                 .catch(this.handleError);
  }
  // To handle Error method
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

  // post("/api/Artists")
  createArtist(newArtist: Artist): Promise<void | Artist> {
    return this.http.post(this.artistsUrl, newArtist)
               .toPromise()
               .then(response => response.json() as Artist)
               .catch(this.handleError);
  }

    // delete("/api/artists/:id")
  deleteArtist(deleteArtistId: String): Promise<void | String> {
    return this.http.delete(this.artistsUrl + '/' + deleteArtistId)
               .toPromise()
               .then(response => response.json() as String)
               .catch(this.handleError);
  }

  //put update ("/api/artists")
  updateArtist(putArtist: Artist): Promise<void | Artist> {
    var putUrl = this.artistsUrl + '/' + putArtist._id;
    return this.http.put(putUrl, putArtist)
               .toPromise()
               .then(response => response.json() as Artist)
               .catch(this.handleError);
  }

}
