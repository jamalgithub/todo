import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../model/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
  private userSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
    //this.userService.getUsersFromServer();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onSave() {
    this.userService.saveUsersToServer();
  }

  onFetch() {
    this.userService.getUsersFromServer();
  }

}
