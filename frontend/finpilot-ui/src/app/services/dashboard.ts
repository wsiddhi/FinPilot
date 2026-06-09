import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private http = inject(HttpClient);

  getDashboard() {

    const token =
      localStorage.getItem('access_token');

    return this.http.get(
      `${API_URL}/dashboard/`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );
  }
}