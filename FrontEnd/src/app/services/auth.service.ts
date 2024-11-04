import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggendIn = false;

  login() {
    this.loggendIn = true;
  }

  logout() {
    this.loggendIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggendIn;
  }
}
