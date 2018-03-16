import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  restList;

  constructor() { }

  ngOnInit() {
  }

  // Update restaurant list
   setRestlist(event) {
   	this.restList = event.restList;
  //  console.log(this.restList)
   }

}
