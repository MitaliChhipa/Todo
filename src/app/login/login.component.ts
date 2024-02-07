import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '../login';
import {signUp} from '../signup';
import * as bcrypt from 'bcryptjs'
import { AuthGuard } from '../gaurd/auth.guard';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  mitali: signUp[]=[];
  
  constructor(private router : Router,private auth:AuthServiceService) {
    const storedUsers = localStorage.getItem('signupEle');
    this.mitali=storedUsers?JSON.parse(storedUsers):[];
   }

  title="Log In"


loginObj : login ={
  username: '',
    password: '',
}
  ngOnInit(): void {
  }

 

  loginUser(){
    console.log("signup",this.mitali)
  const user = this.mitali.find(m=>m.username === this.loginObj.username);
  if(user!==undefined && bcrypt.compareSync(this.loginObj.password,user.password)){
    this.auth.setToken('mitali');
    this.router.navigate(["/todo"]);
  }
  else{
    alert("invalid email or password")
    this.router.navigate(['/login']);
    this.loginObj.username=''
    this.loginObj.password=''
  }
    
 
    

  }

}
