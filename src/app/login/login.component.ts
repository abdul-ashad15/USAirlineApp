import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry } from "@angular/material/icon";

const googleLogoURL = 
"https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Passenger Login';
  username : string = "";
  password : string = "";

  constructor(private router: Router, matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer) {
      matIconRegistry.addSvgIcon("logo",
        domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
     }

  ngOnInit(): void {
  }

  login(username : string,password : string) : void
  {
    debugger;
    if(this.username == "Admin" && this.password == "12345")
    {
      //this.router.navigateByUrl(`/Admin`);
      //this.router.navigateByUrl('/Admin'); 
      this.router.navigate(['/admin'])
    }
  }
}
