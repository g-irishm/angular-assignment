import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from '../../../../services/restaurant.service'

@Component({
  selector: 'app-restlist',
  templateUrl: './restlist.component.html',
  styleUrls: ['./restlist.component.css']
})
export class RestlistComponent implements OnInit {

  @Input() restList;

  public rest;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {

  }

  addFav(rest){
    this.restaurantService.addRest(rest).subscribe((res) =>{

    }, (error) =>{

    })
  }

}
