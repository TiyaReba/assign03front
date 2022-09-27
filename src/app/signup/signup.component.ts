import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { UserserService } from '../userser.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  hidesignup = true;
  role = [
    {id:1,name:'School Student'},
    {id:2,name:'Graduate'},
    {id:3,name:'Professional'},
    {id:4,name:'Others'}
  ]

  constructor(private fb:FormBuilder,private userservice:UserserService,private router:Router) { }
  signupForm = this.fb.group({
    firstname:['',[Validators.required]],
    lastname:['',[Validators.required]],
    age:[null,[Validators.required]],
    gender:['',[Validators.required]],
    role:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    confirmpassword:['',[Validators.required]]
  },{
    validator:() => {
      console.log(this.signupForm);
      if (this.signupForm?.controls?.['password']?.value != this.signupForm?.controls?.['confirmpassword']?.value){
        this.signupForm?.controls?.['confirmpassword'].setErrors({ validatePasswordConfirmation: true });
      }
    }
  })

  get AllControlsforsignup(){
    return this.signupForm.controls
  }

  onsubmitsignup(values:any){
    this.submitted = true;
    // console.log(values);
    // if(!this.signupForm.valid){
    //   alert("Please fill all required fields");
    // }

    // else{
      console.log(this.signupForm.value);
      this.userservice.signupuser(this.signupForm.value)
      .subscribe((res) =>{
        alert("Signed Up Sucessfully");
        this.router.navigate(['/login'])
      })
      
    // }
  }

  ngOnInit(): void {
  }

}
