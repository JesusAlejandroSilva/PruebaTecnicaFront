import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Athletes } from 'src/app/domain/athletes';


@Injectable({
  providedIn: 'root'
})
export class AthletesService {

 public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = 'https://localhost:44312/api/Deportistas/';

   }

  public getAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  public getById(id:number):Observable<any>{
    return this.httpClient.get(this.url + id);
  }

  public save(athletes: Athletes): Observable<any>{
    return this.httpClient.post(this.url, athletes);
  }

  public edit(athletes: Athletes): Observable<any>{
    return this.httpClient.put(this.url + '/'+ athletes.ID, athletes);
  }

  public delete(id:number){
    return this.httpClient.delete(this.url + id);
  }


}