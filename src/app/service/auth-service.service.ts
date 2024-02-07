import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private userToken: string | null = null;

  constructor() { }

  setToken(token : string){
    this.userToken = token;
    sessionStorage.setItem('token',this.userToken)
  }

  getToken() : string | null{
    return sessionStorage.getItem('token');
    // return this.userToken
  }

}
