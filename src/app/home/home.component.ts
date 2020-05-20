import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../login/user';
import { Role } from '../login/role';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    //loading = false;
    currentUser: User;
    userFromApi: User;

    constructor(private authenticationService: LoginService) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        debugger;
        this.authenticationService.getUsersDetailsById(this.currentUser.id).pipe(first()).subscribe(user => {
        this.userFromApi = user;
            console.log(this.userFromApi);
            
        });
    }
}