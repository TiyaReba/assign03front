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
  addbookform = this.bp.group({
    bookname:['',[Validators.required]],
    authorname:['',[Validators.required]],
    genre:['',[Validators.required]],
    availability:['',[Validators.required]]

  })

  get AllControlsforaddbook(){
    return this.addbookform.controls
  }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    console.log(bookId);
    this.bookservice.getbooksbyId(bookId).subscribe((data)=>{
      this.addbookform.getRawValue=JSON.parse(JSON.stringify(data));
  })

  }


  editProduct(values:any)
  {    
    this.bookservice.editProduct(this.addbookform.value);   
    alert("Success");
    this.router.navigate(['books']);
  }
}
