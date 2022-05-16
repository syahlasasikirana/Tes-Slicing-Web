import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated = false;
  isLogin = true;

  constructor(private router: Router) { }

  authenticate():boolean {
    this.isAuthenticated = true;
    this.isLogin = false;
    this.router.navigate(['homepage']);
    return true;
  }
}
