import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../../../services/movie.service'

@Component({
  selector: 'app-moviesearch',
  templateUrl: './moviesearch.component.html',
  styleUrls: ['./moviesearch.component.css']
})
export class MoviesearchComponent implements OnInit {
  // variable to store movie ssearch name
  public query: string = "";

  @Output() success = new EventEmitter<any>();
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  // function to call movie service to get data
  getData(): void {
    this.movieService.getData(this.query).subscribe((res) => {
      this.success.emit({
        'movieList': res.results
      });
    }, (error) => {

    })
  }

}
