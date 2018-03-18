import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieList;

  constructor() { }

  ngOnInit() {
  }
  
  // Update movie list
  setMovieList(event) {
    console.log(this.movieList);
    this.movieList = event.movieList;
    console.log(this.movieList);
  }

}
