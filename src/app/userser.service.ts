import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserService {

  constructor(private http:HttpClient) { }

  signupuser(item:any){
    return this.http.post<any>('https://assign03back.herokuapp.com/signup',item)
  }
  
}
