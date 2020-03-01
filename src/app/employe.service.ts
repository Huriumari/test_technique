import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Employe } from './employe';

@Injectable({
  providedIn: 'root'
})

export class EmployeService {

	private url = 'https://5e53e59831b9970014cf7f9b.mockapi.io/techtest/employees';

	constructor(private http: HttpClient) {  }

	getEmployees(): Observable<Employe[]>{
		return this.http.get<Employe[]>(this.url)
			.pipe(catchError(this.handleError<Employe[]>('getEmployees', [])));;
	}
	
	private handleError<T> (operation = 'operation', result?: T) {
  		return (error: any): Observable<T> => {

    	console.error(error);

    	this.log(`${operation} failed: ${error.message}`);

    	return of(result as T);
  		};
	}

	private log(message:string){

	};
}
