import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  hide = true;
  // hidesignup = true;
  // role = [
  //   {id:1,name:'School Student'},
  //   {id:2,name:'Graduate'},
  //   {id:3,name:'Professional'},
  //   {id:4,name:'Others'}
  // ]

  constructor(private fb:FormBuilder, private router:Router) { }

  signinForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })

  get AllControls(){
    return this.signinForm.controls
  }


  onsubmit(values:any){
    this.submitted = true;
    console.log(values);
    if(!this.signinForm.valid){
      alert("Invalid Login");
    }

    else{
      console.log(this.signinForm.value);
      alert("Login Sucessful");
      this.router.navigate(['/books'])
    }
  }

  // onsubmitsignup(values:any){
  //   this.submitted = true;
  //   console.log(values);
  //   if(!this.signupForm.valid){
  //     alert("Please fill all required fields");
  //   }

  //   else{
  //     console.log(this.signinForm.value);
  //     alert("Signed Up Sucessfully")
  //   }
  // }

  ngOnInit(): void {
  }

}
