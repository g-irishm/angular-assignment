import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../../services/movie.service'
import { Movie } from '../../../../configs/movie.config'
@Component({
  selector: 'app-favmovielist',
  templateUrl: './favmovielist.component.html',
  styleUrls: ['./favmovielist.component.css']
})
export class FavmovielistComponent implements OnInit {

  movieList;
  baseUrl;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.baseUrl = Movie.image_base;
    this.movieService.getFav().subscribe((res) => {
      this.movieList = res;
      console.log(this.movieList);
    }, (error) => {
      console.log("Data not found");
    })
  }

  delFav(movie) {
    this.movieService.delFav(movie).subscribe(res=> {
      this.movieService.getFav().subscribe((res) =>{
      this.movieList = res;
      }, (error) =>{
        console.log("Data not found");
      })
    }, error => console.log("Could not Delete"));
  }

}
