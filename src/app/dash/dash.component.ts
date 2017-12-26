import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
	itemCount: number = 4;
	goalText:string;
	btnvalue="Add";
    goals = ['this', 'and', 'that'];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem(){
  	alert("button pressed");
  }

}
