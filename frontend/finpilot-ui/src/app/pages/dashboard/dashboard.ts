import { Component, OnInit, inject } from '@angular/core';
import { DashboardService } from '../../services/dashboard';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {

  totalIncome = 0;
  totalExpense = 0;
  balance = 0;

  private dashboardService =
    inject(DashboardService);

  ngOnInit() {

    this.dashboardService
      .getDashboard()
      .subscribe({

        next: (data: any) => {

          console.log(data);

          this.totalIncome =
            data.total_income || 0;

          this.totalExpense =
            data.total_expense || 0;

          this.balance =
            data.balance || 0;
        },

        error: (err: any) => {

          console.log(err);
        }
      });
  }
}