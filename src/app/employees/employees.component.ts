import { Component, OnInit } from '@angular/core';

import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
 	selector: 'app-employees',
 	templateUrl: './employees.component.html',
 	styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

	employees: Employe[];

	constructor(private employeService: EmployeService) {  }

	ngOnInit(): void {
		this.getEmployees();
	}

	getEmployees():void{
		this.employeService.getEmployees()
		.subscribe(employees => this.employees = employees);
	}
}
