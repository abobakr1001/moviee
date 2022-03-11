import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient,private Router:Router) { }

  currentUser = new BehaviorSubject(null);

 savecurrentuser(){
   let token:any = localStorage.getItem('usertoken');
   this.currentUser.next(jwtDecode(token))
 }

  login(FormData:any):Observable<any>
  {
   return this.httpclient.post('https://route-egypt-api.herokuapp.com/signin',FormData)
  }

  register(FormData:any):Observable<any>

  {
   return this.httpclient.post('https://route-egypt-api.herokuapp.com/signup',FormData)
  }

  logout()
  {
    this.currentUser.next(null);
    localStorage.removeItem('userToken');
    this.Router.navigate(['/login']);
  }
}
