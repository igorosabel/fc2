import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable }  from 'rxjs';
import { environment } from 'src/environments/environment';
import { DiamondsResult } from 'src/app/interfaces/interfaces';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	apiUrl = environment.apiUrl;

	constructor(private http : HttpClient) {}

	getGrids(map: string): Observable<DiamondsResult> {
		return this.http.post<DiamondsResult>(this.apiUrl + 'get-diamonds', {map});
	}
}
