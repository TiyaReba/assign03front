import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookserService {

  constructor(private http:HttpClient,public router:Router) { }

  addbooks(item:any){
    return this.http.post<any>('https://assign03back.herokuapp.com/addbook',item)
  }

  getProducts(){
    return this.http.get('https://assign03back.herokuapp.com/books');
  }

  deleteBook(id:any)
  {
    console.log("id",id)
    return this.http.delete(`https://assign03back.herokuapp.com/remove/${id}`)

  }

  getbooksbyId(id:any){
    return this.http.get<any>(`https://assign03back.herokuapp.com/${id}`)
  }


  editProduct(product:any)
  {
    console.log('client update')
    return this.http.put("https://assign03back.herokuapp.com/update",product)
    .subscribe(data =>{console.log(data)})
  }
}


