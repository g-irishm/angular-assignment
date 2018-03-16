import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestaurantService } from '../../../../services/restaurant.service'

@Component({
  selector: 'app-restsearch',
  templateUrl: './restsearch.component.html',
  styleUrls: ['./restsearch.component.css']
})

export class RestsearchComponent implements OnInit {
  // variable to store restaurant search name
  public query:string = "";

	@Output() success = new EventEmitter<any>();

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
  }

  // function to call restaurant service to get data
  getData(): void {
    this.restaurantService.getData(this.query).subscribe((res) =>{
  	this.success.emit({
      'restList': res.restaurants
    });
  	}, (error) =>{

  	})
  }

  getFav(): void {
    this.restaurantService.getFav().subscribe((res) =>{
    this.success.emit({
      'restList': res.restaurants
    });
    }, (error) =>{

    })
  }

}
