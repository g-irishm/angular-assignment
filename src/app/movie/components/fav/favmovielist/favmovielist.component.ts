import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../../services/movie.service'

@Component({
  selector: 'app-favmovielist',
  templateUrl: './favmovielist.component.html',
  styleUrls: ['./favmovielist.component.css']
})
export class FavmovielistComponent implements OnInit {

  movieList;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getFav().subscribe((res) => {
      this.movieList = res;
      console.log(this.movieList);
    }, (error) => {
      console.log("Data not found");
    })
  }

}
