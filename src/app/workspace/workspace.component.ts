import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  image:string = "assets/google.png";
  netflix:string = "assets/netflix.png";
  gojek:string = "assets/gojek.png";
  paypal:string = "assets/paypal.png";
  tesla:string = "assets/tesla.png";
  grab:string = "assets/grab.png";



  // vektor:string = "assets/Vektor.png";
}
