import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { AuthServiceService } from './service/auth-service.service';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'toDoList';
  constructor(private Auth:AuthServiceService, private router: Router){}
  ngOnInit(): void {
    if(this.Auth.getToken()!=undefined){
      this.router.navigate(['/todo'])
    }
  }
  
}
