import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
  ];
  userSubject = new Subject<User[]>();
  private apiurl = "https://http-client-demo-80e64.firebaseio.com/users.json";

  constructor(private httpClient: HttpClient) { }

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

  saveUsersToServer() {
    const putObservable = this.httpClient.put(this.apiurl, this.users);
    putObservable.subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  getUsersFromServer() {
    const getObservable = this.httpClient.get<any[]>(this.apiurl);
    getObservable.subscribe(
      (response) => {
        this.users = response;
        this.emitUsers();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

}
