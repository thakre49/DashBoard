import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'; // <-- Import this
import { MatButtonModule } from '@angular/material/button'; // Optional, if you're using buttons

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  imports: [MatTableModule, MatCardModule, MatButtonModule], // <-- Add MatCardModule here
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'status'];
  usersData = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      status: 'Inactive',
    },
    {
      id: 3,
      name: 'Samuel Green',
      email: 'samuel.green@example.com',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      status: 'Active',
    },
  ];
}
