import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Movie } from '../configs/movie.config';

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });

  // function to get data from api
  getData(keywrd) {
    console.log(keywrd);
    return this.http.get(Movie.search_api+keywrd)
     .map(
       data => data.json(),
       (error: any) => this.handleError(error));
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  // Add favourite Movie to database
  addMovie(movie) {
  console.log("Adding to:"+Movie.Url+"/movies");
    return this.http.post(Movie.Url + "/movies", movie, { headers: this.headers })
      .map(data => data.json(),
      (error: any) => this.handleError(error));
  }

  // get favourite movie from database
  getFav() {
    return this.http.get(Movie.Url + "/movies")
      .map(data => data.json(),
      (error: any) => this.handleError(error));
  }

  // delete favourite movie from database
  delFav(movie) {
    return this.http.delete(Movie.Url + "/movies/" + movie.id, { headers: this.headers }).map(success => success.status);
  }
}
