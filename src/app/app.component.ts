import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';

  constructor(public authenticationService: AuthenticationService) {}

  logo:string = "assets/logo.png";
  account:string = "assets/account.png";
  // cek:string = "assets/cek.png";


}
