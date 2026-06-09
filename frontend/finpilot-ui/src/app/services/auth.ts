import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  login(
    username: string,
    password: string
  ) {
    return this.http.post(
      `${API_URL}/token/`,
      {
        username,
        password
      }
    );
  }

  saveToken(token: string) {
    localStorage.setItem(
      'access_token',
      token
    );
  }

  getToken() {
    return localStorage.getItem(
      'access_token'
    );
  }

  logout() {
    localStorage.clear();
  }
}