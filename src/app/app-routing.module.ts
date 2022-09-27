import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddbookComponent } from './addbook/addbook.component';
import { HeaderComponent } from './header/header.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [
{path:'',component:HomeComponent} , 
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'books',component:BooksComponent},
{path:'addbook',component:AddbookComponent},
{path:'update',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
