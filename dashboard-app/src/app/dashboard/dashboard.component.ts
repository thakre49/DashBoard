import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core'; // Required for color support
import { MatListModule } from '@angular/material/list';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule, MatCardModule, MatCommonModule, MatListModule], // Add required imports here
})
export class DashboardComponent {
  dashboardStats = [
    { title: 'Users', value: 100, color: 'primary' },
    { title: 'Sales', value: 500, color: 'accent' },
    { title: 'Revenue', value: 1000, color: 'warn' },
  ];
}
