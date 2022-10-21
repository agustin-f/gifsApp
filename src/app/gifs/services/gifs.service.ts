import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = 'tGnD40JxVIw33QlwnY8rnX6Tu9OAE50V';
  private _historial:string[] = [];
  public resultados:any[]=[];
  
  get historial(){
    return [...this._historial];
  }

  constructor(private http:HttpClient) { }

  buscarGifs(query:string){

    query = query.trim().toLocaleLowerCase();
   
    if( !this._historial.includes(query) ){
      this._historial.unshift(query);
      this._historial =  this._historial.splice(0,10);
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=tGnD40JxVIw33QlwnY8rnX6Tu9OAE50V&q=${query} z&limit=10`)
      .subscribe((resp:any) => {
         console.log(resp.data);
         this.resultados = resp.data;
      })
    
    console.log(this._historial);
  }
}
