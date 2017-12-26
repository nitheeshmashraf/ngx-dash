import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

	empName:string;
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(res => this.empName=res.name);
  }

  ngOnInit() {
  }

}
