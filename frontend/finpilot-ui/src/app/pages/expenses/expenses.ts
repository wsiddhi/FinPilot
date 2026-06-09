import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseService } from '../../services/expense';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expenses.html',
  styleUrl: './expenses.scss',
})
export class Expenses implements OnInit {

  expenses: any[] = [];

  private expenseService =
    inject(ExpenseService);

  ngOnInit() {

    this.expenseService
      .getExpenses()
      .subscribe({

        next: (data: any) => {

          console.log(data);

          this.expenses = data;
        },

        error: (err: any) => {

          console.log(err);
        }
      });
  }
}