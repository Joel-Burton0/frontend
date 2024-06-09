import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroment/environment'; 
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  private API_URL = environment.api_url + '/api/v1/Book';
  constructor(private _http:HttpClient) { }

  makeBooking(data: any):Observable<any> {
    return this._http.post<any>(this.API_URL + '/booking', data)
      .pipe(
        map((res ) =>{
          return res
        })
      );
  }

}
