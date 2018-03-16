import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../../services/restaurant.service'

@Component({
  selector: 'app-favrestlist',
  templateUrl: './favrestlist.component.html',
  styleUrls: ['./favrestlist.component.css']
})
export class FavrestlistComponent implements OnInit {

  restList;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getFav().subscribe((res) =>{
    this.restList = res;
    console.log(this.restList);
    }, (error) =>{
      console.log("Data not found");
    })
  }

  delFav(rest) {
    this.restaurantService.delFav(rest).subscribe(res=> {
      this.restList = "";
      this.restaurantService.getFav().subscribe((res) =>{
      this.restList = res;
      console.log(this.restList);
      }, (error) =>{
        console.log("Data not found");
      })
    }, error => console.log("Could not Delete"));
  }

}
