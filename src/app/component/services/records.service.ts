import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from 'src/app/domain/register';


@Injectable({
    providedIn: 'root'
  })
  export class RecordsService {
  
   public url: string;
  
    constructor(public httpClient: HttpClient) {
      this.url = 'https://localhost:44312/api/Registros/';
  
     }
  
    public getAll():Observable<any>{
      return this.httpClient.get(this.url);
    }
  
    public getById(id:number):Observable<any>{
      return this.httpClient.get(this.url + id);
    }
  
    public save(register: Register): Observable<any>{
      return this.httpClient.post(this.url, register);
    }
  
    public edit(register: Register): Observable<any>{
      return this.httpClient.put(this.url + '/'+ register.ID, register);
    }
  
    public delete(id:number){
      return this.httpClient.delete(this.url + id);
    }
  
  
  }