import { Injectable, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule  } from '@angular/common/http'
import { Observable,BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable()

export class LoginService
{
    private url : string = "  http://localhost:3001/Users";
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    users : User[];
    user : User;

    constructor(private http: HttpClient ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.getUsersDetails();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    getUsersDetails() : Observable<User[]>{
        return this.http.get<User[]>(this.url)
      }
    
      getUsersDetailsById(id: number) {
          debugger;
        return this.http.get<User>(this.url + '/' + id);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
