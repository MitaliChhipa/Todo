import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from '../signup';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  title="Sign Up"
  signupEle: signUp[]=[]

  signupobj : signUp={
    email: '',
    username: '',
    password: ''
  }
  
  constructor(private router: Router ) {}


SignupUser() {
alert("signed in successfully")
const encryptedPassword = bcrypt.hashSync(this.signupobj.password);
this.signupobj.password= encryptedPassword;

this.signupEle.push(this.signupobj);
localStorage.setItem("signupEle",JSON.stringify(this.signupEle));
this.signupobj={
  email:'',
  username:'',
  password:''
}
console.log(this.signupEle);
//this.router.navigate(["/login"])

}



  ngOnInit(): void {
    const temp = localStorage.getItem("signupEle");
    this.signupEle=temp?JSON.parse(temp):[];
  }

}
