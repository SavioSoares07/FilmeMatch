import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = true;

  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.AuthService.isLoggedIn();
  }

  logout(): void {
    this.AuthService.logout();
    this.isLoggedIn = this.AuthService.isLoggedIn();
  }
}
