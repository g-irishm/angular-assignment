import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../../../services/movie.service'
import { Movie } from '../../../../configs/movie.config'
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  baseUrl;

  @Input() movieList;

  public movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.baseUrl = Movie.image_base;
  }
  
  addFav(movie) {
    this.movieService.addMovie(movie).subscribe((res) => {

    }, (error) => {

    })
  }

}
