import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AuthGuard } from './gaurd/auth.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent },
  {path:'signup',component:SignupComponent},
  {path:'todo',component: TodolistComponent, canActivate : [AuthGuard]},
  {path: '**',redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
