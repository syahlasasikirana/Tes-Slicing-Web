import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormInvalid = false;
  isAuthenticated = false;
  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm){
    if(!signInForm.valid) {
      this.isFormInvalid = true;
      this.isAuthenticated = false;
      return;
    }
    this.checkCredentials(signInForm);
  }

  private checkCredentials(signInForm: NgForm){
    if(!this.auth.authenticate()){
      this.isFormInvalid = false;
      this.isAuthenticated = true;
    }
  }

  login:string = "assets/login.png";
  remember:string = "assets/remember.png";


}
