import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './admin/navbar.service';
import { User } from './login/user';
import { Role } from './login/role';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template : `<passenger-details></passenger-details>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Passenger Details';
  currentUser: User;

  constructor(private router: Router,public authenticationService: LoginService,public navService : NavbarService)
  {
    debugger;
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      //this.navService.show();
  }

  isAdmin()
  {
    debugger;
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

  //loginPage(){
    //this.router.navigate(['/login']);
//}
}
