import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../../../services/movie.service'

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  @Input() movieList;

  public movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
  
  addFav(movie) {
    this.movieService.addMovie(movie).subscribe((res) => {

    }, (error) => {

    })
  }

}
