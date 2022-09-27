import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookserService {

  constructor(private http:HttpClient,public router:Router) { }

  addbooks(item:any){
    return this.http.post<any>('http://localhost:3000/addbook',item)
  }

  getProducts(){
    return this.http.get('http://localhost:3000/books');
  }

  deleteBook(id:any)
  {
    console.log("id",id)
    return this.http.delete(`http://localhost:3000/remove/${id}`)

  }

  getbooksbyId(id:any){
    return this.http.get<any>(`http://localhost:3000/books/${id}`)
  }


  editProduct(product:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",product)
    .subscribe(data =>{console.log(data)})
  }
}


