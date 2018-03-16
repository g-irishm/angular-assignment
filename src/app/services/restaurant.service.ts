import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Restaurant } from '../configs/rest.config';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});

  // function to get data from zomato api
  getData(keywrd) {
    return this.http.get(Restaurant.search_api+keywrd)
     .map(
       data => data.json(),
       (error: any) => this.handleError(error));
  }

  private handleError(error: Response){
      return Observable.throw(error.statusText);
    }

  // Add favourite restaurant to database
   addRest(rest) {
     return this.http.post(Restaurant.Url+"/restaurants", rest, {headers: this.headers})
      .map(data => data.json(),
    (error: any)=>this.handleError(error));
   }

   // get favourite restaurant from database
   getFav() {
      return this.http.get(Restaurant.Url+"/restaurants")
       .map(data => data.json(),
     (error: any)=>this.handleError(error));
    }

    // delete favourite restaurant from database
    delFav(rest) {
       return this.http.delete(Restaurant.Url+"/restaurants/"+rest.id,{headers: this.headers}).map(success => success.status);
     }

}
