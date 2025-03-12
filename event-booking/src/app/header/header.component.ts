import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoggedInUserService } from '../service/logged-in-user.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  loggedInUserName: string = "";
  loggedInUserEmail: string = "";
  isAdmin: boolean = false;

  constructor(
    private loggedInUserService: LoggedInUserService
  ) {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.loggedInUserService.isLoggedIn();

    if (this.isUserLoggedIn) {
      const loggedInUser = this.loggedInUserService.getLoggedInUser();
      this.loggedInUserName = loggedInUser ? loggedInUser.userName : '';
      this.loggedInUserEmail = loggedInUser ? loggedInUser.userEmail : '';
      this.isAdmin = loggedInUser ? loggedInUser.isAdmin : false;
    }

  }

  logoutUser() {
    this.loggedInUserService.logout();
    window.location.reload();
  }

}
