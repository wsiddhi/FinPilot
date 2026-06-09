import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private http = inject(HttpClient);

  getExpenses() {

    const token =
      localStorage.getItem('access_token');

    return this.http.get(
      `${API_URL}/expenses/`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );
  }
}