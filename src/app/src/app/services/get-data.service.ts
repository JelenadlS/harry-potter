import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { characters } from "./hp-data.interface";



@Injectable({
    providedIn: 'root'
})
export class dataService {
    url: string = 'https://hp-api.onrender.com/api/characters';

    constructor(private http: HttpClient){}

   getCharacters(): Observable<characters[]>{
        return this.http.get<characters[]>(this.url);
      }

}