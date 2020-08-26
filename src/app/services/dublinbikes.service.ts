import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dublinbikes } from '../models/dublinbikes';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DublinbikesService {
  
  private contract_name = `dublin`;
  private api_key = `923b9f8762f3bacf246b898bf50e66550436b145`;
  private url = `https://api.jcdecaux.com/vls/v1/stations?contract=${this.contract_name}&apiKey=${this.api_key}`;


  constructor(private http: HttpClient) { }

  getListOfBikes(): Observable<Dublinbikes[]>{
    return this.http.get<Dublinbikes[]>(this.url);
  }
}