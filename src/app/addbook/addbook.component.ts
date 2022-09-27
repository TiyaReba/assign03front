import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserService } from '../bookser.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  submitted = false;
  constructor(private bp: FormBuilder,private bookservice:BookserService,private router:Router,private route:ActivatedRoute) { }
  addbookform = this.bp.group({
    bookname:['',[Validators.required]],
    authorname:['',[Validators.required]],
    genre:['',[Validators.required]],
    availability:['',[Validators.required]]

  })

  get AllControlsforaddbook(){
    return this.addbookform.controls
  }

  onsubmitaddbook(values:any){
    this.submitted = true;
    console.log(this.addbookform.value);
    this.bookservice.addbooks(this.addbookform.value)
    .subscribe((res)=>{
      alert("Book has been addedd sucessfully");
      this.router.navigate(['/books'])
    })
  }
  ip:any;
  data:any
  ngOnInit():void {
    // this.ip =this.route.snapshot.paramMap.get('id');
    // console.log('id is', this.ip);
    // this.bookservice.getbooksbyId(this.ip)
    // .subscribe((res)=>{
    //   console.log(res)
    
      
  //   })
  // }
  }
}
