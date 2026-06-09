import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  username = '';
  password = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  login() {

    this.authService.login(
      this.username,
      this.password
    ).subscribe({

      next: (res: any) => {

        console.log(res);

        this.authService.saveToken(
          res.access
        );

        alert(
          'Login Successful 🚀'
        );

        this.router.navigate([
          '/dashboard'
        ]);
      },

      error: (err) => {

        console.log(err);

        alert(
          'Login Failed'
        );
      }
    });
  }
}