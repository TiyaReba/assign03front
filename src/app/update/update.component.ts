import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookserService } from '../bookser.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private bookservice:BookserService,private bp:FormBuilder,private router:Router) { }
  // addbookform = this.bp.group({
  //   bookname:['',[Validators.required]],
  //   authorname:['',[Validators.required]],
  //   genre:['',[Validators.required]],
  //   availability:['',[Validators.required]]

  // })
  books={
    bookname:'',
    authorname:'',
    genre:'',
    availability:''  
    }

  // get AllControlsforaddbook(){
  //   return this.addbookform.controls
  // }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editProductId");
    console.log(bookId);
    this.bookservice.getbooksbyId(bookId).subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
      console.log(this.books)
  })
  }
  editProduct()
  {    
    console.log('edit')
    this.bookservice.editProduct(this.books);   
    alert("Success");
    this.router.navigate(['books']);
  }
}
