import { Component, OnInit } from '@angular/core';
import { BookserService } from '../bookser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  pageTitle: string = 'Book List';
  data:any;

    books=[{
      bookname:'',
      authorname:'',
      genre:'',
      availability:''  
      }]
   

  constructor(private bookservice:BookserService,private router:Router) { }
  ngOnInit(): void {
    
    this.bookservice.getProducts().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }
deleteBook(product:any){
  var  id =product._id;
  console.log("product",id)
  this.bookservice.deleteBook(product._id)
  .subscribe((res:any) => {
    console.log(res);
    this.books = this.books.filter(p => p !==product);
  })
}


editProduct(product:any)
{
  localStorage.setItem("editProductId", product._id.toString());
  this.router.navigate(['update']);


}
}
